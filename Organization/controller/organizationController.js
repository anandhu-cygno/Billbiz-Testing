const Organization = require("../database/model/organization");
const Account = require("../database/model/account")
const mongoose = require('mongoose');


const accounts = [
  { accountName: "Advance Tax", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Employee Advance", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Prepaid Expense", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "TDS Receivable", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Petty Cash", accountSubhead: "Cash", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Undeposited Funds", accountSubhead: "Cash", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Bank", accountSubhead: "", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Furniture and Equipment", accountSubhead: "Fixed Asset", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Stock", accountSubhead: "", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Payment Clearing", accountSubhead: "", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Sundry Debtors", accountSubhead: "", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Customers", accountSubhead: "", accountHead: "Asset", accountGroup: "Asset" },
  { accountName: "Capital Stock", accountSubhead: "", accountHead: "Equity", accountGroup: "Equity" },
  { accountName: "Distribution", accountSubhead: "", accountHead: "Equity", accountGroup: "Equity" },
  { accountName: "Dividends Paid", accountSubhead: "", accountHead: "Equity", accountGroup: "Equity" },
  { accountName: "Drawings", accountSubhead: "", accountHead: "Equity", accountGroup: "Equity" },
  { accountName: "Investments", accountSubhead: "", accountHead: "Equity", accountGroup: "Equity" },
  { accountName: "Opening Balance Offset", accountSubhead: "", accountHead: "Equity", accountGroup: "Equity" },
  { accountName: "Owner's Equity", accountSubhead: "", accountHead: "Equity", accountGroup: "Equity" },
  { accountName: "General Income", accountSubhead: "", accountHead: "Income", accountGroup: "Income" },
  { accountName: "Interest Income", accountSubhead: "", accountHead: "Income", accountGroup: "Income" },
  { accountName: "Sales", accountSubhead: "", accountHead: "Income", accountGroup: "Income" },
  { accountName: "Other Income", accountSubhead: "", accountHead: "Income", accountGroup: "Income" },
  { accountName: "Employee Reimbursements", accountSubhead: "Current Liability", accountHead: "Liabilities", accountGroup: "Liability" },
  { accountName: "TDS Payable", accountSubhead: "Current Liability", accountHead: "Liabilities", accountGroup: "Liability" },
  { accountName: "Credit Card", accountSubhead: "", accountHead: "Liabilities", accountGroup: "Liability" },
  { accountName: "Construction Loan", accountSubhead: "Long Term Liability", accountHead: "Liabilities", accountGroup: "Liability" },
  { accountName: "Mortgages", accountSubhead: "Long Term Liability", accountHead: "Liabilities", accountGroup: "Liability" },
  { accountName: "Overseas Tax Payable", accountSubhead: "Other Liability", accountHead: "Liabilities", accountGroup: "Liability" },
  { accountName: "Sundry Creditors", accountSubhead: "", accountHead: "Liabilities", accountGroup: "Liability" },
  { accountName: "Suppliers", accountSubhead: "", accountHead: "Liabilities", accountGroup: "Liability" },
  { accountName: "Advertising and Marketing", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Automobile Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Consultant Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Contract Assets", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Credit Card Charges", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Depreciation and Amortisation", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Depreciation Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "IT and Internet Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Janitorial Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Lodging", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Meals and Entertainment", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Merchandise", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Office Supplies", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Postage", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Printing and Stationary", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Raw Material and Consumables", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Rent Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Repairs and Maintenance", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Telephone Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Transportation Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Travel Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Other Expense", accountSubhead: "", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Cost of Goods Sold", accountSubhead: "Cost of Goods Sold", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Job Costing", accountSubhead: "Cost of Goods Sold", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Labor", accountSubhead: "Cost of Goods Sold", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Materials", accountSubhead: "Cost of Goods Sold", accountHead: "Expense", accountGroup: "Expenses" },
  { accountName: "Subcontractor", accountSubhead: "Cost of Goods Sold", accountHead: "Expense", accountGroup: "Expenses" }
];

async function insertAccounts(accounts,organizationId) {

const accountDocuments = accounts.map(account => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    return {
        organizationId: organizationId, 
        accountName: account.accountName,
        accountCode: "", 

        accountSubhead: account.accountSubhead,
        accountHead: account.accountHead,
        accountGroup: account.accountGroup,

        openingBalance: 0, 
        openingBalanceDate: formattedDate, 
        description: "" 
    };});

  try {
      await Account.insertMany(accountDocuments);
      console.log('Accounts created successfully');
  } catch (error) {
      console.error('Error inserting accounts:', error);
  }
}


// Get all organizations
exports.getAllOrganization = async (req, res) => {
  try {
    const allOrganizations = await Organization.find();

    if (allOrganizations.length > 0) {
      res.status(200).json(allOrganizations);
    } else {
      res.status(404).json("No organizations found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};



// get One organization
exports.getOneOrganization = async (req, res) => {
  try {
    const { organizationId } = req.params;

    // Log the ID being fetched
    console.log("Fetching organization with ID:", organizationId);

    const organization = await Organization.findOne({organizationId});

    if (organization) {
      res.status(200).json(organization);
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  } catch (error) {
    console.error("Error fetching organization:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




// Edit organizations
exports.updateOrganization = async (req, res) => {
  console.log("Received request to update organization:", req.body);
  
  try {
      const { organizationId } = req.params;
      const {
          organizationLogo,
          organizationName,
          organizationCountry,
          organizationIndustry,
          addline1,
          addline2,
          city,
          pincode,
          state,
          organizationPhNum,
          website,
          baseCurrency,
          fiscalYear,
          reportBasis,
          language,
          timeZone,
          dateFormat,
          dateSplit,
          companyId,
          companyIdField,
          taxId,
          taxIdField,
          qrLocation,
          qrSignature,
          twitter,
          insta,
          linkedin,
          facebook,
          addfield,
          accountHolderName,
          bankName,
          accNum,
          ifsc,
      } = req.body;
      
      // Log the ID being updated
      console.log("Updating organization with ID:", organizationId);

      const updatedOrganization = await Organization.findByIdAndUpdate(
          organizationId,
          {
              organizationId,
              organizationLogo,
              organizationName,
              organizationCountry,
              organizationIndustry,
              addline1,
              addline2,
              city,
              pincode,
              state,
              organizationPhNum,
              website,
              baseCurrency,
              fiscalYear,
              reportBasis,
              language,
              timeZone,
              dateFormat,
              dateSplit,
              companyId,
              companyIdField,
              taxId,
              taxIdField,
              qrLocation,
              qrSignature,
              twitter,
              insta,
              linkedin,
              facebook,
              addfield,
              accountHolderName,
              bankName,
              accNum,
              ifsc
          },
          { new: true, runValidators: true }
      );

      if (!updatedOrganization) {
          console.log("Organization not found with ID:", _id);
          return res.status(404).json({ message: "Organization not found" });
      }

      res.status(200).json({ message: "Organization updated successfully" });
      console.log("Organization updated successfully:", updatedOrganization);
  } catch (error) {
      console.error("Error updating organization:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};




// Delete Organization
exports.deleteOrganization = async (req, res) => {
    console.log("Delete Organization by id:", req.params.id);
    try {
      const { organizationId } = req.params;
  
      // Check if the organization exists
      const organization = await Organization.findOne({organizationId});
  
      if (!organization) {
        return res.status(404).json({
          message: "Organization not found.",
        });
      }
  
      // Delete the organization
      await Organization.findByIdAndDelete({organizationId});
  
      res.status(200).json({
        message: "Organization deleted successfully.",
      });
      console.log("Organization deleted successfully:", id);
    } catch (error) {
      console.error("Error deleting Organization:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };




// Additional data
exports.getAdditionalData = (req, res) => {
  try {
    const additionalData = [
      {
        industry: [
          "Agency or sales house",
          "Agriculture",
          "Art & Design",
          "Automotive",
          "Construction",
          "Consulting",
          "Consumer Packaged Goods",
          "Education",
          "Engineering",
          "Entertainment",
          "Financial Services",
          "Food Services (Restaurants/Fast Food)",
          "Gaming",
          "Government",
          "Health Care",
          "Interior Design",
          "Internal",
          "Legal",
          "Manufacturing",
          "Marketing",
          "Mining and Logistics",
          "Non-Profit",
          "Publishing and Web Media",
          "Real Estate",
          'Retail (E-Commerce and Offline)',
          "Services",
          "Technology",
          "Telecommunications",
          "Travel/Hospitality",
          "Web Designing",
          "Web Development",
          "Writers"
          ],
        financialYear: [
          "January - December",
          "February - January ",
          "March - February ",
          "April - March" ,
          "May - April ",
          "June - May ",
          "July - June ",
          "August - July ",
          "September - August ",
          "October - September ",
          "November -October ",
          "December - November "
        ],
        dateFormat: {
          "short": [
            "mm/dd/yy",
            "dd/mm/yy",
            "yy/mm/dd"
          ],
          "medium": [
            "mm/dd/yyyy",
            "dd/mm/yyyy",
            "yyyy/mm/dd"
          ],
          "long": [
            "dd MMM yyyy",
            "dd MMMM yyyy",
            "MMMM dd yyyy",
            "EEE, MMMM dd, yyyy",
            "EEEEEE, MMMM dd, yyyy",
            "MMMM dd, yyyy",
            "yyyy MM dd"
          ]
        },
        companyId: [
          "ACN",
          "BN",
          "CN",
          "CPR",
          "CVR",
          "DIW",
          "KT",
          "ORG",
          "SEC",
          "Company ID :"],
        dateSplit: ["-", "/", "."],
        taxId: ["ABN",
          "BN",
          "CST",
          "ORG",
          "TAX",
          "VST",
          "Tax ID :"]
      }
    ];

    if (additionalData.length > 0) {
      res.status(200).json(additionalData);
    } else {
      res.status(404).json("No Additional Data found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};





// Setup organization
exports.setupOrganization = async (req, res) => {
  console.log("Setup Organization:", req.body);
  try {
    const {
      organizationId,
      organizationLogo,
      // organizationName,
      organizationCountry,
      organizationIndustry,
      addline1,
      addline2,
      city,
      pincode,
      state,
      organizationPhNum,
      website,
      baseCurrency,
      fiscalYear,
      reportBasis,
      language,
      timeZone,
      dateFormat,
      dateSplit,
      companyId,
      companyIdField,
      taxId,
      taxIdField,
      qrLocation,
      qrSignature,
      twitter,
      insta,
      linkedin,
      facebook,
      addfield,
      accountHolderName,
      bankName,
      accNum,
      ifsc,
    } = req.body;

    // Check if an Organization already exists
    const existingOrganization = await Organization.findOne({ organizationId });

    if (!existingOrganization) {
      return res.status(404).json({
        message: "No Organization Found.",
      });
    }

    // Check if an organization with the same organizationName already exists (excluding the current organization)
    // const existingOrganizationName = await Organization.findOne({
    //   organizationName,
    //   _id: { $ne: existingOrganization._id }
    // });

    // if (existingOrganizationName) {
    //   return res.status(409).json({
    //     message: "Organization with the provided name already exists.",
    //   });
    // }

    // Update the existing organization's fields
    existingOrganization.organizationLogo = organizationLogo;
    // existingOrganization.organizationName = organizationName;
    existingOrganization.organizationCountry = organizationCountry;
    existingOrganization.organizationIndustry = organizationIndustry;
    existingOrganization.addline1 = addline1;
    existingOrganization.addline2 = addline2;
    existingOrganization.city = city;
    existingOrganization.pincode = pincode;
    existingOrganization.state = state;
    existingOrganization.organizationPhNum = organizationPhNum;
    existingOrganization.website = website;
    existingOrganization.baseCurrency = baseCurrency;
    existingOrganization.fiscalYear = fiscalYear;
    existingOrganization.reportBasis = reportBasis;
    existingOrganization.language = language;
    existingOrganization.timeZone = timeZone;
    existingOrganization.dateFormat = dateFormat;
    existingOrganization.dateSplit = dateSplit;
    existingOrganization.companyId = companyId;
    existingOrganization.companyIdField = companyIdField;
    existingOrganization.taxId = taxId;
    existingOrganization.taxIdField = taxIdField;
    existingOrganization.qrLocation = qrLocation;
    existingOrganization.qrSignature = qrSignature;
    existingOrganization.twitter = twitter;
    existingOrganization.insta = insta;
    existingOrganization.linkedin = linkedin;
    existingOrganization.facebook = facebook;
    existingOrganization.accountHolderName = accountHolderName;
    existingOrganization.bankName = bankName;
    existingOrganization.accNum = accNum;
    existingOrganization.ifsc = ifsc;
    existingOrganization.addfield = Array.isArray(addfield) ? addfield.map((field) => ({
      label: field.label,
      value: field.value,
    })) : [];

    const savedOrganization = await existingOrganization.save();

    if (!savedOrganization) {
      console.error("Organization could not be saved.");
      return res.status(500).json({ message: "Failed to update organization." });
    }

    res.status(200).json({
      message: "Organization updated successfully."
    });
    console.log("Organization updated successfully:", savedOrganization);

    
    
    const account = await Account.find({ organizationId:organizationId });
    if (!account) {
      insertAccounts(accounts, organizationId);
        };


  } catch (error) {
    console.error("Error updating Organization:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
