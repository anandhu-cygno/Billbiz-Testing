const Organization = require("../database/model/organization");

// add organization
exports.addOrganization = async (req, res) => {
  console.log("add Organization:", req.body);
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

      // address: address.map((addr) => ({
      //   addline1: addr.addline1,
      //   addline2: addr.addline2,
      //   city: addr.city,
      //   pincode: addr.pincode,
      //   state: addr.state,
      // })),

      addfield: addfield.map((field) => ({
        label: field.label,
        value: field.value,
      })),
      // bankfield: bankfield.map((bank) => ({
      //   accountHolderName: bank.accountHolderName,
      //   bankName: bank.bankName,
      //   accNum: bank.accNum,
      //   ifsc: bank.ifsc,
      // })),
      
    });

    // Save the new organization to the database
    const savedOrganization = await newOrganization.save();

    // Respond with a success message and the newly created organization
    res.status(201).json({
      message: "Organization created successfully.",
      organization: savedOrganization,
    });
    console.log("Organization created successfully:", savedOrganization);
  } catch (error) {
    console.error("Error creating Organization:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


// get organozations
exports.getOrganization = async (req, res) => {
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




// edit organizations
exports.updateOrganization = async (req, res) => {
    console.log("update Organization :", req.body);
    try {
      const { _id, companyName, companyEmail } = req.body;
  
      const updatedOrganization = await Organization.findByIdAndUpdate(
        _id,
        {
          companyName,
          companyEmail
        },
        { new: true, runValidators: true }
      );
  
      if (!updatedOrganization) {
        return res.status(404).json({
          message: "Organization not found",
        });
      }
  
      res.status(200).json({ message: "Organization updated successfully" });
      console.log("Organization updated successfully");
    } catch (error) {
      console.error("Error updating Organization:", error);
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