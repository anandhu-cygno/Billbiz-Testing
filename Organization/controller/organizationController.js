const Organization = require("../database/model/organization");
const Account = require("../database/model/account")

// const accounts = [
//   { accountName: "Advance Tax", accountType: "Assets", accountHeads: "Current Assets",accountGroup: "Assets" },
//   { accountName: "Advertising & Promotion", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Bad Debts Written Off", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Balance Written Off", accountType: "Indirect Expenses", accountHeads: "Indirect Income" },
//   { accountName: "Bank Charges", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Bills Receivable", accountType: "Assets", accountHeads: "Current Assets" },
//   { accountName: "Building", accountType: "Assets", accountHeads: "Fixed Assets" },
//   { accountName: "Cash", accountType: "Assets", accountHeads: "Cash-in-hand" },
//   { accountName: "Charity & Donations", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Computer", accountType: "Assets", accountHeads: "Fixed Assets" },
//   { accountName: "Consultant Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Customs Duty Payable", accountType: "Direct Expenses", accountHeads: "Direct Expenses" },
//   { accountName: "Depreciation Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Employee Advance", accountType: "Assets", accountHeads: "Current Assets" },
//   { accountName: "Forex Gain/Loss", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Freight Charges", accountType: "Direct Income", accountHeads: "Direct Income" },
//   { accountName: "Fuel Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Furniture and Fittings", accountType: "Assets", accountHeads: "Fixed Assets" },
//   { accountName: "General Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Housekeeping Charges", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Insurance Charges", accountType: "Direct Income", accountHeads: "Direct Income" },
//   { accountName: "Insurance Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Interest on Loan", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "IT and Internet Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Land", accountType: "Assets", accountHeads: "Fixed Assets" },
//   { accountName: "Machinery", accountType: "Assets", accountHeads: "Fixed Assets" },
//   { accountName: "Miscellaneous Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Output CGST 9%", accountType: "Liabilities", accountHeads: "Duties & Taxes" },
//   { accountName: "Output SGST 9%", accountType: "Liabilities", accountHeads: "Duties & Taxes" },
//   { accountName: "Packing and Forwarding Charges", accountType: "Direct Income", accountHeads: "Direct Income" },
//   { accountName: "Postal Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Prepaid Expense", accountType: "Assets", accountHeads: "Current Assets" },
//   { accountName: "Printing & Stationery", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Profit and Loss", accountType: "Liabilities", accountHeads: "Capital Account" },
//   { accountName: "Purchase", accountType: "Indirect Expenses", accountHeads: "Purchase" },
//   { accountName: "Purchase Return", accountType: "Purchase", accountHeads: "Purchase" },
//   { accountName: "Rent Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Repairs and Maintenance", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Round Off", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Salary", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Sales", accountType: "Sales", accountHeads: "Sales" },
//   { accountName: "Sales Return", accountType: "Sales", accountHeads: "Sales" },
//   { accountName: "Staff Welfare Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Sundry Creditors", accountType: "Sundry Creditors", accountHeads: "Sundry Creditors" },
//   { accountName: "Sundry Debtors", accountType: "Sundry Debtors", accountHeads: "Sundry Debtors" },
//   { accountName: "TDS Payable", accountType: "Liabilities", accountHeads: "Current Liabilities" },
//   { accountName: "TDS Receivable", accountType: "Assets", accountHeads: "Current Assets" },
//   { accountName: "Telephone Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Travel Expense", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "Undeposited Funds", accountType: "Assets", accountHeads: "Current Assets" },
//   { accountName: "Vehicle", accountType: "Assets", accountHeads: "Fixed Assets" },
//   { accountName: "Wages", accountType: "Direct Expenses", accountHeads: "Direct Expenses" },
//   { accountName: "Water & Electricity Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses" },
//   { accountName: "walk in customer", accountType: "Current Assets", accountHeads: "Sundry Debtors" }
// ];

// const accounts = [
//   { accountName: "Advance Tax", accountType: "Assets", accountHeads: "Current Assets", accountGroup: "asset" },
//   { accountName: "Advertising & Promotion", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Bad Debts Written Off", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Balance Written Off", accountType: "Indirect Expenses", accountHeads: "Indirect Income", accountGroup: "liability" },
//   { accountName: "Bank Charges", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Bills Receivable", accountType: "Assets", accountHeads: "Current Assets", accountGroup: "asset" },
//   { accountName: "Building", accountType: "Assets", accountHeads: "Fixed Assets", accountGroup: "asset" },
//   { accountName: "Cash", accountType: "Assets", accountHeads: "Cash-in-hand", accountGroup: "asset" },
//   { accountName: "Charity & Donations", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Computer", accountType: "Assets", accountHeads: "Fixed Assets", accountGroup: "asset" },
//   { accountName: "Consultant Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Customs Duty Payable", accountType: "Direct Expenses", accountHeads: "Direct Expenses", accountGroup: "liability" },
//   { accountName: "Depreciation Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Employee Advance", accountType: "Assets", accountHeads: "Current Assets", accountGroup: "asset" },
//   { accountName: "Forex Gain/Loss", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Freight Charges", accountType: "Direct Income", accountHeads: "Direct Income", accountGroup: "liability" },
//   { accountName: "Fuel Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Furniture and Fittings", accountType: "Assets", accountHeads: "Fixed Assets", accountGroup: "asset" },
//   { accountName: "General Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Housekeeping Charges", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Insurance Charges", accountType: "Direct Income", accountHeads: "Direct Income", accountGroup: "liability" },
//   { accountName: "Insurance Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Interest on Loan", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "IT and Internet Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Land", accountType: "Assets", accountHeads: "Fixed Assets", accountGroup: "asset" },
//   { accountName: "Machinery", accountType: "Assets", accountHeads: "Fixed Assets", accountGroup: "asset" },
//   { accountName: "Miscellaneous Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Output CGST 9%", accountType: "Liabilities", accountHeads: "Duties & Taxes", accountGroup: "liability" },
//   { accountName: "Output SGST 9%", accountType: "Liabilities", accountHeads: "Duties & Taxes", accountGroup: "liability" },
//   { accountName: "Packing and Forwarding Charges", accountType: "Direct Income", accountHeads: "Direct Income", accountGroup: "liability" },
//   { accountName: "Postal Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Prepaid Expense", accountType: "Assets", accountHeads: "Current Assets", accountGroup: "asset" },
//   { accountName: "Printing & Stationery", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Profit and Loss", accountType: "Liabilities", accountHeads: "Capital Account", accountGroup: "liability" },
//   { accountName: "Purchase", accountType: "Indirect Expenses", accountHeads: "Purchase", accountGroup: "liability" },
//   { accountName: "Purchase Return", accountType: "Purchase", accountHeads: "Purchase", accountGroup: "liability" },
//   { accountName: "Rent Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Repairs and Maintenance", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Round Off", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Salary", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Sales", accountType: "Sales", accountHeads: "Sales", accountGroup: "liability" },
//   { accountName: "Sales Return", accountType: "Sales", accountHeads: "Sales", accountGroup: "liability" },
//   { accountName: "Staff Welfare Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Sundry Creditors", accountType: "Sundry Creditors", accountHeads: "Sundry Creditors", accountGroup: "liability" },
//   { accountName: "Sundry Debtors", accountType: "Sundry Debtors", accountHeads: "Sundry Debtors", accountGroup: "asset" },
//   { accountName: "TDS Payable", accountType: "Liabilities", accountHeads: "Current Liabilities", accountGroup: "liability" },
//   { accountName: "TDS Receivable", accountType: "Assets", accountHeads: "Current Assets", accountGroup: "asset" },
//   { accountName: "Telephone Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Travel Expense", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "Undeposited Funds", accountType: "Assets", accountHeads: "Current Assets", accountGroup: "asset" },
//   { accountName: "Vehicle", accountType: "Assets", accountHeads: "Fixed Assets", accountGroup: "asset" },
//   { accountName: "Wages", accountType: "Direct Expenses", accountHeads: "Direct Expenses", accountGroup: "liability" },
//   { accountName: "Water & Electricity Expenses", accountType: "Indirect Expenses", accountHeads: "Indirect Expenses", accountGroup: "liability" },
//   { accountName: "walk in customer", accountType: "Current Assets", accountHeads: "Sundry Debtors", accountGroup: "asset" }
// ];

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
        accountType: account.accountType,
        accountGroup: account.accountGroup,
        accountHeads: account.accountHeads,
        openingBalance: 0, 
        openingBalanceDate: formattedDate, 
        description: "" 
    };
});

  try {
      await Account.insertMany(accountDocuments);
      console.log('Accounts created successfully');
  } catch (error) {
      console.error('Error inserting accounts:', error);
  }
}

// add organization
exports.addOrganization = async (req, res) => {
  console.log("Add Organization:", req.body);
  try {
      const {
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
          ifsc,
      } = req.body;

      // Check if an organization with the same organizationName already exists
      const existingOrganization = await Organization.findOne({ organizationName });

      if (existingOrganization) {
          return res.status(409).json({
              message: "Organization with the provided organizationName already exists.",
          });
      }

      // Create a new organization
      const newOrganization = new Organization({
          organizationId,
          organizationLogo,
          organizationName,
          organizationCountry,
          organizationIndustry,
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

          addline1,
          addline2,
          city,
          pincode,
          state,

          accountHolderName,
          bankName,
          accNum,
          ifsc,

          addfield: Array.isArray(addfield) ? addfield.map((field) => ({
              label: field.label,
              value: field.value,
          })) : [],
      });

      const savedOrganization = await newOrganization.save();

      if (!savedOrganization) {
        console.error("Organization could not be saved.");
        return res.status(500).json({ message: "Failed to create organization." });
    }

      res.status(201).json({
          message: "Organization created successfully."
      });
      console.log("Organization created successfully:");
      insertAccounts(accounts, organizationId);
  } catch (error) {
      console.error("Error creating Organization:", error);
      res.status(500).json({ message: "Internal server error." });
  }
};


// get all organizations
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

// get one organization
exports.getOneOrganization = async (req, res) => {
  try {
    const { _id } = req.params;

    // Log the ID being fetched
    console.log("Fetching organization with ID:", _id);

    const organization = await Organization.findById(_id);

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


// edit organizations
exports.updateOrganization = async (req, res) => {
  console.log("Received request to update organization:", req.body);
  
  try {
      const {
          _id,
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
          ifsc,
      } = req.body;
      
      // Log the ID being updated
      console.log("Updating organization with ID:", _id);

      const updatedOrganization = await Organization.findByIdAndUpdate(
          _id,
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



// delete Organization
exports.deleteOrganization = async (req, res) => {
    console.log("delete Organization by id:", req.params.id);
    try {
      const { id } = req.params;
  
      // Check if the organization exists
      const organization = await Organization.findById(id);
  
      if (!organization) {
        return res.status(404).json({
          message: "Organization not found.",
        });
      }
  
      // Delete the organization
      await Organization.findByIdAndDelete(id);
  
      res.status(200).json({
        message: "Organization deleted successfully.",
      });
      console.log("Organization deleted successfully:", id);
    } catch (error) {
      console.error("Error deleting Organization:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };



//additional data
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


