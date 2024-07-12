const Organization = require("../database/model/organization");
const Account = require("../database/model/account")
const Trial = require("../database/model/trialBalence")



//Add Journal Entry
exports.addJournalEntry = async (req, res) => {
    console.log("Add journal Entry:", req.body);
    try {
        const { 
            organization_Id,
            journal_id,
            date,
            creditAccount,
            debitAccount,
            amount,
            remark
        } = req.body;

        // Check if the organization exists
        const existingOrganization = await Organization.findById(organization_Id);
        if (!existingOrganization) {
            return res.status(404).json({
                message: "No Organization Found.",
            });
        }

        // Check if all credit and debit accounts exist for the given organization
        const allAccountIds = [
            ...creditAccount.map(account => account.account_id),
            ...debitAccount.map(account => account.account_id)
        ];

        const existingAccounts = await Account.find({
            _id: { $in: allAccountIds },
            organizationId: organization_Id
        });

        if (existingAccounts.length !== allAccountIds.length) {
            return res.status(404).json({
                message: "One or more accounts not found for the given organization."
            });
        }

        // Create a new journal entry
        const newJournalEntry = new Journal({
            organization_Id,
            journal_id,
            date,
            creditAccount,
            debitAccount,
            amount,
            remark
        });

        await newJournalEntry.save();

        res.status(201).json({
            message: "Journal entry created successfully."
        });
        console.log("Journal entry created successfully:", newJournalEntry);
    } catch (error) {
        console.error("Error creating journal entry:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};
