const Organization = require("../database/model/organization");
const Account = require("../database/model/account")


//Add Account
exports.addAccount = async (req, res) => {
    console.log("Add Account:", req.body);
    try {
      const {       
        organizationId,
        accountName,
        accountCode,
        accountType,
        accountGroup,
        accountHeads,
        openingBalance,
        openingBalanceDate,
        description,
        bankAccNum,
        bankIfsc,
        bankCurrency,
      } = req.body;
  
      // Check if an organization with the same organizationName already exists
      const existingAccount = await Account.findOne({ accountName });
  
      if (existingAccount) {
        return res.status(409).json({
          message: "Account with the provided Account Name already exists.",
        });
      }
  
      // Create a new organization
      const newAccount = new Account({
        organizationId,
        accountName,
        accountCode,
        accountType,
        accountGroup,
        accountHeads,
        openingBalance,
        openingBalanceDate,
        description,
        bankAccNum,
        bankIfsc,
        bankCurrency,        
      });
  
      
      await newAccount.save();
  
      
      res.status(201).json({
        message: "Account created successfully."
      });
      console.log("Account created successfully:");
    } catch (error) {
      console.error("Error creating Account:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };

  

// Get all accounts for a given organizationId
exports.getAllAccount = async (req, res) => {
    try {
        const { organizationId } = req.body;
        // console.log(organizationId);

        // Find all accounts where organizationId matches
        const accounts = await Account.find({ organizationId });

        if (!accounts.length) {
            return res.status(404).json({
                message: "No accounts found for the provided organization ID.",
            });
        }

        res.status(200).json(accounts);
    } catch (error) {
        console.error("Error fetching accounts:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};



//Get one Account for a given organizationId
exports.getOneAccount = async (req, res) => {
  try {
      const { accountId } = req.params;
      const { organizationId } = req.body;

      // Find the account by accountId and organizationId
      const account = await Account.findOne({
          _id: accountId,
          organizationId: organizationId,
      });

      if (!account) {
          return res.status(404).json({
              message: "Account not found for the provided Organization ID and Account ID.",
          });
      }

      res.status(200).json(account);
  } catch (error) {
      console.error("Error fetching account:", error);
      res.status(500).json({ message: "Internal server error." });
  }
};



//Edit account
exports.editAccount = async (req, res) => {
  console.log("Edit Account:", req.body);
  try {
      const { accountId } = req.params;

      const {
          organizationId,
          accountName,
          accountCode,
          accountType,
          accountGroup,
          accountHeads,
          openingBalance,
          openingBalanceDate,
          description,
          bankAccNum,
          bankIfsc,
          bankCurrency,
      } = req.body;

      // Check if an account with the given organizationId and accountId exists
      const account = await Account.findOne({
          _id: accountId,
          organizationId: organizationId,
      });

      if (!account) {
          return res.status(404).json({
              message: "Account not found for the provided Organization ID and Account ID.",
          });
      }

      // Update account fields
      account.accountName = accountName;
      account.accountCode = accountCode;
      account.accountType = accountType;
      account.accountGroup = accountGroup;
      account.accountHeads = accountHeads;
      account.openingBalance = openingBalance;
      account.openingBalanceDate = openingBalanceDate;
      account.description = description;
      account.bankAccNum = bankAccNum;
      account.bankIfsc = bankIfsc;
      account.bankCurrency = bankCurrency;

      // Save updated account
      await account.save();

      res.status(200).json({
          message: "Account updated successfully."
      });
      console.log("Account updated successfully:");
  } catch (error) {
      console.error("Error updating Account:", error);
      res.status(500).json({ message: "Internal server error." });
  }
};



//Delete account
exports.deleteAccount = async (req, res) => {
  try {
      const { accountId } = req.params;
      const { organizationId } = req.body;

      // Check if an account with the given organizationId and accountId exists
      const account = await Account.findOne({
          _id: accountId,
          organizationId: organizationId,
      });

      if (!account) {
          return res.status(404).json({
              message: "Account not found for the provided Organization ID and Account ID.",
          });
      }

      // Delete the account
      await account.delete();

      res.status(200).json({
          message: "Account deleted successfully.",
          deletedAccount: account,
      });
      console.log("Account deleted successfully:", account);
  } catch (error) {
      console.error("Error deleting Account:", error);
      res.status(500).json({ message: "Internal server error." });
  }
};





