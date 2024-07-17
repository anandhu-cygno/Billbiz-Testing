const Brand = require('../database/model/brand');

// Add a new brand
exports.addBrand = async (req, res) => {
    console.log("Add brand:", req.body);
    const {
        organizationId,
        name,
        description,
        createdDate,
        updatedDate
    } = req.body;

    try {
        // Check if a brand with the same name already exists within the same organization
        const existingBrandByName = await Brand.findOne({ name, organizationId });

        if (existingBrandByName) {
            console.log("Brand with name already exists:", existingBrandByName);
            return res.status(409).json({
                message: "A brand with this name already exists in the given organization.",
            });
        }

        // Create a new brand
        const newBrand = new Brand({
            organizationId,
            name,
            description,
            createdDate,
            updatedDate
        });

        // Save the brand to the database
        const savedBrand = await newBrand.save();

        // Send response
        res.status(201).json(savedBrand);
    } catch (error) {
        console.error("Error adding brand:", error);
        res.status(400).json({ error: error.message });
    }
};

// Get all brands by organizationId
exports.getAllBrands = async (req, res) => {
    const organizationId = req.params.id;
    try {
        const allBrands = await Brand.find( organizationId );
        res.status(200).json(allBrands);
    } catch (error) {
        console.error("Error fetching brands:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

// Get a single brand by ID
exports.getABrand = async (req, res) => {
    const brandId = req.params.id;
    try {
        const brand = await Brand.findById(brandId);
        if (!brand) {
            return res.status(404).json({ message: "Brand not found" });
        }
        res.status(200).json(brand);
    } catch (error) {
        console.error("Error fetching brand:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

// Update a brand by ID, ensuring the new name does not conflict
exports.updateBrand = async (req, res) => {
    console.log("Received request to update brand:", req.body);
    
    try {
        const brandId = req.params.id;
        const {
            organizationId,
            name,
            description,
            createdDate,
            updatedDate,
        } = req.body;

        // Find the current brand by its ID
        const currentBrand = await Brand.findById(brandId);

        if (!currentBrand) {
            console.log("Brand not found with ID:", brandId);
            return res.status(404).json({ message: "Brand not found" });
        }

        // Check if the new name already exists in the same organizationId, excluding the current brand being updated
        if (currentBrand.name !== name) {
            const existingBrandByName = await Brand.findOne({
                name,
                organizationId,
                _id: { $ne: brandId } // Exclude the current brand from the check
            });

            if (existingBrandByName) {
                console.log("Brand with name already exists:", existingBrandByName);
                return res.status(409).json({
                    message: "A brand with this name already exists in the given organization.",
                });
            }
        }

        // Update the brand
        const updatedBrand = await Brand.findByIdAndUpdate(
            brandId,
            {
                organizationId,
                name,
                description,
                createdDate,
                updatedDate,
            },
            { new: true, runValidators: true }
        );

        if (!updatedBrand) {
            console.log("Brand not found with ID:", brandId);
            return res.status(404).json({ message: "Brand not found" });
        }

        res.status(200).json({ message: "Brand updated successfully", brand: updatedBrand });
        console.log("Brand updated successfully:", updatedBrand);
    } catch (error) {
        console.error("Error updating brand:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a brand by ID
exports.deleteBrand = async (req, res) => {
    const brandId = req.params.id;

    try {
        const deletedBrand = await Brand.findByIdAndDelete(brandId);

        if (!deletedBrand) {
            return res.status(404).json({ error: 'Brand not found' });
        }

        res.status(200).json({ message: 'Brand deleted successfully', deletedBrand });
    } catch (error) {
        console.error("Error deleting brand:", error);
        res.status(500).json({ error: 'Server error' });
    }
};
