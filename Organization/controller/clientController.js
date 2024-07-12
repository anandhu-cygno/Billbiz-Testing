const Organization = require("../database/model/organization");
const Client = require("../database/model/client")
const bcrypt = require('bcrypt');



//create Organization
exports.creaeOrganizationAndClient = async (req, res) => {
  console.log("Create Organization and Client:", req.body);
  try {
    const {
      organizationName,
      contactName,
      contactNum,
      email,
      password,
    } = req.body;

    // Check if an organization with the same organizationName already exists
    const existingOrganization = await Organization.findOne({ organizationName });

    if (existingOrganization) {
      return res.status(409).json({
        message: "Organization with the provided name already exists.",
      });
    }

    // Create a new organization
    const newOrganization = new Organization({
      organizationName,
      primaryContactName: contactName,
      primaryContactNum: contactNum,
    });

    let savedOrganization = await newOrganization.save();

    if (!savedOrganization) {
      console.error("Organization could not be saved.");
      return res.status(500).json({ message: "Failed to create organization." });
    }

    const organizationId = savedOrganization._id;

    // Update the organization with its own _id
    savedOrganization.organizationId = organizationId;
    savedOrganization = await savedOrganization.save();

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new client
    const newClient = new Client({
      contactName,
      contactNum,
      email,
      password: hashedPassword,
      access: 'Admin',
      organizationId,
      organizationName
    });

    const savedClient = await newClient.save();

    if (!savedClient) {
      console.error("Client could not be saved.");
      return res.status(500).json({ message: "Failed to create client." });
    }

    res.status(201).json({
      message: "Organization and Client created successfully.",
      organizationId: organizationId,
    });
    console.log("Organization and Client created successfully:", { organizationId });
  } catch (error) {
    console.error("Error creating Organization and Client:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createOrganizationAndClient = async (req, res) => {
  console.log("Create Organization and Client:", req.body);
  try {
    const {
      organizationName,
      contactName,
      contactNum,
      email,
      password,
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
      contactName,
      contactNum,
      email,
      password: hashedPassword,
      access: 'Admin',
      organizationId,
      organizationName
    });

    const savedClient = await newClient.save();

    if (!savedClient) {
      console.error("Client could not be saved.");
      return res.status(500).json({ message: "Failed to create client." });
    }

    res.status(201).json({
      message: "Organization and Client created successfully.",
      organizationId: organizationId,
    });
    console.log("Organization and Client created successfully:", { organizationId });
  } catch (error) {
    console.error("Error creating Organization and Client:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};