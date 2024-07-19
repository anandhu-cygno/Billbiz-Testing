const Organization = require("../database/model/organization");
const Supplier = require("../database/model/supplier");
const Account = require("../../Accounts/database/model/account");
 
// exports.addSupplier = async (req, res) => {
//     console.log("add supplier:", req.body);
//     const {
//         organizationId,
//         createdDate,
//         salutation,
//         firstName,
//         lastName,
//         companyName,
//         supplierEmail,
//         workPhone,
//         mobile,
//         gstNo,
//         creditDays,
//         creditLimit,
//         interestPercentage,
//         pan,
//         currency,
//         openingBalance,
//         paymentTerms,
//         tds,
//         uploadFiles,
//         websiteUrl,
//         department,
//         designation,
//         twitter,
//         skypeName,
//         facebook,
//         billingAttention,
//         billingCountry,
//         billingAddress,
//         billingCity,
//         billingState,
//         billingPinCode,
//         billingPhone,
//         billingFaxNum,
//         shippingAttention,
//         shippingCountry,
//         shippingAddress,
//         shippingCity,
//         shippingState,
//         shippingPinCode,
//         shippingPhone,
//         shippingFaxNum,
//         remarks
//     } = req.body;

//     const currentDate = new Date();
//     const day = String(currentDate.getDate()).padStart(2, "0");
//     const month = String(currentDate.getMonth() + 1).padStart(2, "0");
//     const year = currentDate.getFullYear();
//     const formattedDate = `${day}-${month}-${year}`;
 
//     try {
//       // Validate organizationId
//       const organizationExists = await Organization.findOne({
//         organizationId: organizationId,
//       });
//       if (!organizationExists) {
//         return res.status(404).json({
//           message: "Organization not found",
//         });
//       }
   
//       // Check if customer with the same email already exists in the organization
//       const existingSupplier = await Supplier.findOne({
//         supplierEmail: supplierEmail,
//         organizationId: organizationId,
//       });
//       if (existingSupplier) {
//         return res.status(409).json({
//           message: "Supplier with the provided email already exists.",
//         });
//       }       
 
//       // Create a new supplier
//       const newSupplier = new Supplier({
//         organizationId,
//         createdDate: formattedDate,
//         salutation,
//         firstName,
//         lastName,
//         companyName,
//         supplierEmail,
//         workPhone,
//         mobile,
//         gstNo,
//         creditDays,
//         creditLimit,
//         interestPercentage,
//         pan,
//         currency,
//         openingBalance,
//         paymentTerms,
//         tds,
//         uploadFiles,
//         websiteUrl,
//         department,
//         designation,
//         twitter,
//         skypeName,
//         facebook,
//         billingAttention,
//         billingCountry,
//         billingAddress,
//         billingCity,
//         billingState,
//         billingPinCode,
//         billingPhone,
//         billingFaxNum,
//         shippingAttention,
//         shippingCountry,
//         shippingAddress,
//         shippingCity,
//         shippingState,
//         shippingPinCode,
//         shippingPhone,
//         shippingFaxNum,
//         remarks,
//         status: "Active",        
//         });
 
//         await newSupplier.save();

//         res.status(201).json({
//           message: "Supplier created successfully.",
//         });
//         console.log("Supplier created successfully:");

//       // Check if an organization with the same organizationName already exists
//       const existingAccount = await Account.findOne({
//         accountName: firstName + " " + lastName,
//         organizationId: organizationId,
//       });
   
//       if (existingAccount) {
//         return res.status(409).json({
//           message: "Account with the provided Account Name already exists.",
//         });
//       }

//       // Create a new account
//       const newAccount = new Account({
//         organizationId,
//         accountName: firstName + " " + lastName,
//         accountCode: "AA123",
//         accountSubhead: "Liability",
//         accountHead: "Liabilities",
//         accountGroup: "Sundry creditors",
//         openingBalance: "",
//         openingBalanceDate: formattedDate,
//         description: `Account for supplier ${salutation} ${firstName} ${lastName}`,
//         bankAccNum: "",
//         bankIfsc: "",
//         bankCurrency: ""
//       });

//       await newAccount.save();

//       res.status(201).json({
//         message: "Supplier Account created successfully.",
//       });
//       console.log("Supplier Account created successfully");
//     } catch (error) {
//       console.error("Error creating supplier:", error);
//       res.status(500).json({ message: "Internal server error." });
//     }
// };
 
exports.addSupplier = async (req, res) => {
  console.log("add supplier:", req.body);
  const {
    organizationId,
    salutation,
    firstName,
    lastName,
    companyName,
    supplierEmail,
    workPhone,
    mobile,
    gstNo,
    creditDays,
    creditLimit,
    interestPercentage,
    pan,
    currency,
    openingBalance,
    paymentTerms,
    tds,
    uploadFiles,
    websiteUrl,
    department,
    designation,
    twitter,
    skypeName,
    facebook,
    billingAttention,
    billingCountry,
    billingAddress,
    billingCity,
    billingState,
    billingPinCode,
    billingPhone,
    billingFaxNum,
    shippingAttention,
    shippingCountry,
    shippingAddress,
    shippingCity,
    shippingState,
    shippingPinCode,
    shippingPhone,
    shippingFaxNum,
    remarks
  } = req.body;

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  try {
    // Validate organizationId
    const organizationExists = await Organization.findOne({
      organizationId: organizationId,
    });
    if (!organizationExists) {
      return res.status(404).json({
        message: "Organization not found",
      });
    }

    // Check if supplier with the same email already exists in the organization
    const existingSupplier = await Supplier.findOne({
      supplierEmail: supplierEmail,
      organizationId: organizationId,
    });
    if (existingSupplier) {
      return res.status(409).json({
        message: "Supplier with the provided email already exists.",
      });
    }

    // Create a new supplier
    const newSupplier = new Supplier({
      organizationId,
      createdDate: formattedDate,
      salutation,
      firstName,
      lastName,
      companyName,
      supplierEmail,
      workPhone,
      mobile,
      gstNo,
      creditDays,
      creditLimit,
      interestPercentage,
      pan,
      currency,
      openingBalance,
      paymentTerms,
      tds,
      uploadFiles,
      websiteUrl,
      department,
      designation,
      twitter,
      skypeName,
      facebook,
      billingAttention,
      billingCountry,
      billingAddress,
      billingCity,
      billingState,
      billingPinCode,
      billingPhone,
      billingFaxNum,
      shippingAttention,
      shippingCountry,
      shippingAddress,
      shippingCity,
      shippingState,
      shippingPinCode,
      shippingPhone,
      shippingFaxNum,
      remarks,
      status: "Active",
    });

    await newSupplier.save();

    // Check if an organization with the same organizationName already exists
    const existingAccount = await Account.findOne({
      accountName: firstName + " " + lastName,
      organizationId: organizationId,
    });

    if (existingAccount) {
      return res.status(409).json({
        message: "Account with the provided Account Name already exists.",
      });
    }

    // Create a new account
    const newAccount = new Account({
      organizationId: organizationId,
      accountName: firstName + " " + lastName,
      accountCode: "AA123",
      accountSubhead: "Liability",
      accountHead: "Liabilities",
      accountGroup: "Sundry creditors",
      openingBalance: "",
      openingBalanceDate: formattedDate,
      description: `Account for supplier ${salutation} ${firstName} ${lastName}`,
      bankAccNum: "",
      bankIfsc: "",
      bankCurrency: "",
    });

    await newAccount.save();

    res.status(201).json({
      message: "Supplier and Account created successfully.",
    });
    console.log("Supplier and Account created successfully");
  } catch (error) {
    console.error("Error creating supplier:", error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};

exports.getAllSuppliers = async (req, res) => {
    const organizationId = req.params.id;
    try {
        const allSuppliers = await Supplier.findOne(organizationId);
        res.status(200).json(allSuppliers);
    } catch (error) {
        console.error("Error fetching suppliers:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};
 
exports.getASupplier = async (req, res) => {
    const supplierId = req.params.id;
    try {
        const supplier = await Supplier.findById(supplierId);
        if (!supplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }
        res.status(200).json(supplier);
    } catch (error) {
        console.error("Error fetching supplier:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};
 
exports.updateSupplier = async (req, res) => {
    console.log("Received request to update supplier:", req.body);
   
    try {
        const supplierId = req.params.id;
        const {
            organizationId,
            accountId,
            salutation,
            firstName,
            lastName,
            companyName,
            supplierEmail,
            workPhone,
            mobile,
            gstNo,
            creditDays,
            creditLimit,
            interestPercentage,
            pan,
            currency,
            openingBalance,
            paymentTerms,
            tds,
            uploadFiles,
            websiteUrl,
            department,
            designation,
            twitter,
            skypeName,
            facebook,
            billingAttention,
            billingCountry,
            billingAddress,
            billingCity,
            billingState,
            billingPinCode,
            billingPhone,
            billingFaxNum,
            shippingAttention,
            shippingCountry,
            shippingAddress,
            shippingCity,
            shippingState,
            shippingPinCode,
            shippingPhone,
            shippingFaxNum,
            remarks,
            lastModifiedDate
        } = req.body;

        // Find the supplier by its ID to get the current supplier
        const currentSupplier = await Supplier.findById(_id);

        // Check if the new unitName already exists in the same companyName in the organizationId, excluding the current supplier being updated
        if (currentSupplier.firstName && currentSupplier.lastName !== firstName && lastName) {
        const existingSupplier = await Supplier.findOne({
            firstName,
            lastName,
            companyName,
            organizationId,
            _id: { $ne: _id } // Exclude the current supplier from the check
        });

        if (existingSupplier) {
            return res.status(409).json({
            message: "This supplier name already exists in the same company in the given organization.",
            });
        }
        }
 
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
 
        const updatedSupplier = await Supplier.findByIdAndUpdate(
            supplierId,
            {
                organizationId,
                accountId,
                salutation,
                firstName,
                lastName,
                companyName,
                supplierEmail,
                workPhone,
                mobile,
                gstNo,
                creditDays,
                creditLimit,
                interestPercentage,
                pan,
                currency,
                openingBalance,
                paymentTerms,
                tds,
                uploadFiles,
                websiteUrl,
                department,
                designation,
                twitter,
                skypeName,
                facebook,
                billingAttention,
                billingCountry,
                billingAddress,
                billingCity,
                billingState,
                billingPinCode,
                billingPhone,
                billingFaxNum,
                shippingAttention,
                shippingCountry,
                shippingAddress,
                shippingCity,
                shippingState,
                shippingPinCode,
                shippingPhone,
                shippingFaxNum,
                remarks,
                lastModifiedDate: formattedDate
            },
            { new: true, runValidators: true }
        );
 
        if (!updatedSupplier) {
            console.log("Supplier not found with ID:", supplierId);
            return res.status(404).json({ message: "Supplier not found" });
        }
 
        res.status(200).json({ message: "Supplier updated successfully", supplier: updatedSupplier });
        console.log("Supplier updated successfully:", updatedSupplier);
    } catch (error) {
        console.error("Error updating supplier:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
 
exports.deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params;
 
        const supplier = await Supplier.findById(id);
 
        if (!supplier) {
            return res.status(404).json({ message: "Supplier not found." });
        }
 
        await Supplier.findByIdAndDelete(id);
 
        res.status(200).json({ message: "Supplier deleted successfully." });
        console.log("Supplier deleted successfully:", id);
    } catch (error) {
        console.error("Error deleting supplier:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};








// // // Contact Persons

//1.1. add contactPersons
exports.addContactPersons = async (req, res) => {
    // console.log("Add Contact Persons:", req.body);
    try {
      const {  
        organizationId,  
        companyName,
        contactPersons
                // accountId,
                // salutation,
                // firstName,
                // lastName,
                // companyName,
                // supplierEmail,
                // workPhone,
      } = req.body;
  
      // Find the unit to which the conversion needs to be added
      const unit = await Unit.findOne({ organizationId, unitName });
  
      if (!unit) {
        return res.status(404).json({ message: "Unit not found." });
      }
  
      // Check if the new target unit already exists in the unitConversion array
      const existingConversion = unit.unitConversion.find(conversion => 
        unitConversion.some(newConversion => newConversion.targetUnit === conversion.targetUnit)
      );
  
      if (existingConversion) {
        return res.status(409).json({ message: "Target unit already exists for this unit." });
      }
  
      // Ensure unitConversion is an array and add the new conversion
      if (Array.isArray(unitConversion)) {
        unit.unitConversion = unit.unitConversion.concat(
          unitConversion.map((field) => ({
            targetUnit: field.targetUnit,
            unitConversionRate: field.unitConversionRate,
          }))
        );
      }
  
      // Save the updated unit
      await unit.save();
  
      res.status(201).json({unit});
      // console.log("New unit conversion created successfully:", unit);
    } catch (error) {
      // console.error("Error creating unit conversion:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };