const Supplier = require("../database/model/supplier");

exports.addSupplier = async (req, res) => {
    console.log("add supplier:", req.body);
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
        balance,
        creditDays,
        creditLimit,
        interestPercentage,
        discountPercentage,
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

    try {
        // Check if a supplier with the same organizationId already exists
        const existingSupplierById = await Supplier.findOne({ organizationId });

        if (existingSupplierById) {
            console.log("Supplier with this organizationId already exists:", existingSupplierById);
            return res.status(409).json({
                message: "A supplier with this organizationId already exists in the given organization.",
            });
        }

        // Check if a supplier with the same companyName already exists within the same organization
        const existingSupplierByName = await Supplier.findOne({ companyName, organizationId });

        if (existingSupplierByName) {
            console.log("Supplier with companyName already exists:", existingSupplierByName);
            return res.status(409).json({
                message: "A supplier with this companyName already exists in the given organization.",
            });
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];

        // Create a new supplier
        const newSupplier = new Supplier({
            organizationId,
            accountId,
            createdDate: formattedDate,
            salutation,
            firstName,
            lastName,
            companyName,
            supplierEmail,
            workPhone,
            mobile,
            gstNo,
            balance,
            creditDays,
            creditLimit,
            interestPercentage,
            discountPercentage,
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
        });

        // Save the supplier to the database
        const savedSupplier = await newSupplier.save();

        // Send response
        res.status(201).json(savedSupplier);
    } catch (error) {
        console.error("Error adding supplier:", error);
        res.status(400).json({ error: error.message });
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
            balance,
            creditDays,
            creditLimit,
            interestPercentage,
            discountPercentage,
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
                balance,
                creditDays,
                creditLimit,
                interestPercentage,
                discountPercentage,
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
