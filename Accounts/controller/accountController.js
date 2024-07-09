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
exports.getOneAccount = async (req, res) => {
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


// Get all accounts for a given organizationId
exports.getAccountType = async (req, res) => {
  try {
    const categorized = [
      {
        accountType: 'Asset',
        accountGroup: 'Assets',
        accountHeads: [
          'Current Assets',
          'Fixed Assets',
          'Cash-in-hand',
          'Sundry Debtors'
        ]
      },
      {
        accountType: 'Expense',
        accountGroup: 'Expenses',
        accountHeads: [
          'Indirect Expenses',
          'Direct Expenses',
          'Purchase'
        ]
      },
      {
        accountType: 'Income',
        accountGroup: 'Income',
        accountHeads: [
          'Indirect Income',
          'Direct Income',
          'Sales'
        ]
      },
      {
        accountType: 'Liability',
        accountGroup: 'Liabilities',
        accountHeads: [
          'Duties & Taxes',
          'Capital Account',
          'Current Liabilities',
          'Sundry Creditors'
        ]
      }
    ];
    
            

      res.status(200).json(categorized);
  } catch (error) {
      console.error("Error fetching accounts:", error);
      res.status(500).json({ message: "Internal server error." });
  }
};



