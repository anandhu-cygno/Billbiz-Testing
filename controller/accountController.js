const Organization = require("../database/model/organization");
const Account = require("../database/model/account")

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
  