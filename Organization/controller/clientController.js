const Organization = require("../database/model/organization");
const Client = require("../database/model/client");
const User = require("../database/model/user");
const Prefix = require("../database/model/prefix");
const bcrypt = require('bcrypt');


// Create New Client and Organization and Prefix
exports.createOrganizationAndClient = async (req, res) => {
  console.log("Create Organization and Client:", req.body);
  try {
    const {
      organizationName,
      contactName,
      contactNum,
      email,
      password,
      // Add other fields as needed
    } = req.body;

    // Check if an organization with the same organizationName already exists
    const existingOrganization = await Organization.findOne({ organizationName });

    if (existingOrganization) {
      return res.status(409).json({
        message: "Organization with the provided name already exists.",
      });
    }

    // Count existing organizations to generate the next organizationId
    const organizationCount = await Organization.countDocuments({});
    const nextIdNumber = organizationCount + 1;
    const organizationId = `INDORG${nextIdNumber.toString().padStart(4, '0')}`;

    // Create a new organization
    const newOrganization = new Organization({
      organizationId,
      organizationName,
      primaryContactName: contactName,
      primaryContactNum: contactNum,
    });

    let savedOrganization = await newOrganization.save();

    if (!savedOrganization) {
      console.error("Organization could not be saved.");
      return res.status(500).json({ message: "Failed to create organization." });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new client
    const newClient = new Client({
      organizationName,
      organizationId,
      contactName,
      contactNum,
      email,
      // Add other fields as needed
    });

    const savedClient = await newClient.save();

    if (!savedClient) {
      console.error("Client could not be saved.");
      return res.status(500).json({ message: "Failed to create client." });
    }

    // Create a new user
    const newUser = new User({
      organizationName,
      organizationId,
      userName: contactName,
      userNum: contactNum,
      useremail: email,
      password: hashedPassword,
      access: 'Admin',
      // Add other fields as needed
    });

    const savedUser = await newUser.save();

    if (!savedUser) {
      console.error("User could not be saved.");
      return res.status(500).json({ message: "Failed to create user." });
    }


  
      const newPrefix = new Prefix({
        organizationId,

        journal:"JN-",
        journalNum:1,
        
        creditNote: "CN-",
        creditNoteNum: 1,
        
        customerPayment: 'CP-',
        customerPaymentNum: 1,

        purchaseOrder: "PO-",
        purchaseOrderNum: 1,
        
        salesOrder: "SO-",
        salesOrderNum: 1,

        vendorPayment: "VP-",
        vendorPaymentNum: 1,

        retainerInvoice: "RET-",
        retainerInvoiceNum: 1,

        vendorCredits: "DN-",
        vendorCreditsNum: 1,

        billOfSupply: "BOS-",
        billOfSupplyNum: 1,

        debitNote: "CDN-",
        debitNoteNum: 1,

        invoice:"INV-",
        invoiceNum: 1,

        quote: "QT-",
        quoteNum: 1,
        
        deliveryChallan: "DC-",
        deliveryChallanNum: 1,
      });

  
      const savedPrefix = await newPrefix.save();
  
      if (!savedPrefix) {
        console.error("Prefix could not be saved.");
        return res.status(500).json({ message: "Failed to create Prefix." });
      }
      
    

    res.status(201).json({
      message: "Organization, Prefix, Client, and User created successfully.",
      organizationId: organizationId,
    });
    console.log("Organization, Client, and User created successfully:", { organizationId });
  } catch (error) {
    console.error("Error creating Organization, Client, and User:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};





// Get all Client
exports.getAllClient = async (req, res) => {
  try {
    const allClient = await Client.find();

    if (allClient.length > 0) {
      res.status(200).json(allClient);
    } else {
      res.status(404).json("No Client found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};