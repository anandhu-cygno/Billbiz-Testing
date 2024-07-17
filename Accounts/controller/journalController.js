const Organization = require("../database/model/organization");
const Account = require("../database/model/account");
const Prefix = require("../database/model/prefix");
const Journal = require("../database/model/journal");
const TrialBalance = require("../database/model/trialBalance");

// Add Journal Entry
exports.addJournalEntry = async (req, res) => {
    console.log("Add journal Entry:", req.body);
    try {
        const { 
            organizationId,
            date,
            reference,
            note,
            cashBasedJournal,
            currency,
            transaction,
            totalDebitAmount,
            totalCreditAmount
        } = req.body;

        // Check if the organization exists
        const existingOrganization = await Organization.findOne({ organizationId });
        if (!existingOrganization) {
            return res.status(404).json({
                message: "No Organization Found.",
            });
        }

        // Check if all accounts exist for the given organization
        const allAccountIds = transaction.map(trans => trans.accountId);
        const existingAccounts = await Account.find({
            _id: { $in: allAccountIds },
            organizationId
        });

        if (existingAccounts.length !== allAccountIds.length) {
            return res.status(404).json({
                message: "One or more accounts not found for the given organization."
            });
        }

        // Calculate total debit and credit amounts from the array of transactions
        const calculatedTotalDebitAmount = transaction.reduce((sum, trans) => sum + trans.debitAmount, 0);
        const calculatedTotalCreditAmount = transaction.reduce((sum, trans) => sum + trans.creditAmount, 0);

        console.log(calculatedTotalDebitAmount,calculatedTotalCreditAmount);

        // Ensure the sum of debit and credit amounts are equal
        if (calculatedTotalDebitAmount !== calculatedTotalCreditAmount) {
            return res.status(400).json({
                message: "Calculated debit and credit amounts must be equal."
            });
        }

        // Ensure the provided total debit and credit amounts match the calculated amounts
        if (totalDebitAmount !== calculatedTotalDebitAmount || totalCreditAmount !== calculatedTotalCreditAmount) {
            return res.status(400).json({
                message: "Provided total debit and credit amounts must match the calculated amounts."
            });
        }

        // Check if the organizationId exists in the Prefix collection
        const existingPrefix = await Prefix.findOne({ organizationId });
        if (!existingPrefix) {
            return res.status(404).json({
                message: "No Prefix data found for the organization."
            });
        }

        // Generate the journalId by joining journal and journalNum
        const journalId = `${existingPrefix.journal}${existingPrefix.journalNum}`;

        // Increment the journalNum and save it back to the Prefix collection
        existingPrefix.journalNum += 1;
        await existingPrefix.save();

        // Create a new journal entry
        const newJournalEntry = new Journal({
            organizationId: organizationId,
            journalId,
            date,
            reference,
            note,
            cashBasedJournal,
            currency,
            transaction: Array.isArray(transaction)
                ? transaction.map(trans => ({
                    accountId: trans.accountId,
                    accountName: trans.accountName,
                    debitAmount: trans.debitAmount,
                    creditAmount: trans.creditAmount,
                    description: trans.description,
                    contact: trans.contact,
                }))
                : [],
            totalDebitAmount,
            totalCreditAmount
        });

        await newJournalEntry.save();

        // Insert data into TrialBalance collection and update account balances
        for (const trans of transaction) {
            const newTrialEntry = new TrialBalance({
                organizationId,
                transactionId: journalId,
                date,
                account_id: trans.accountId,
                accountName: trans.accountName,
                action: "Journal",
                debitAmount: trans.debitAmount,
                creditAmount: trans.creditAmount,
                remark: note
            });

            await newTrialEntry.save();

            // Update account balance
            const account = await Account.findOne({ _id: trans.accountId });
            if (account) {
                const updatedBalance = parseFloat(account.balance) + parseFloat(trans.debitAmount) - parseFloat(trans.creditAmount);
                account.balance = updatedBalance.toString();
                await account.save();
            }
        }

        res.status(201).json({
            message: "Journal entry created successfully."
        });
        console.log("Journal entry created successfully:", newJournalEntry);
    } catch (error) {
        console.error("Error creating journal entry:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};
