const Organization = require("../database/model/organization");
const manufacturer = require ('../database/model/manufacturer');

exports.addManufacturer =  async (req,res)=>{
    console.log("add manufacturer:", req.body);
const {
    organizationId,
    name,
    description,
    manfId,
    manfName,
    createdDate,
    updatedDate,
    compName
  } = req.body;

  const existingManufacturer = await manufacturer.findOne({ manfId });
  
    if (existingManufacturer) {
      return res.status(409).json({
        message: "This item already exists.",
      });
    }

  try {
    // Create a new manufacturer
    const newManufacturer = new manufacturer({
      organizationId,
      name,
      description,
      manfId,
      manfName,
      createdDate,
      updatedDate,
      compName
    });

    // Save the manufacturer to the database
    const savedManufacturer = await newManufacturer.save();

    // Send response
    res.status(201).json(savedManufacturer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }}

  // Get all item
exports.getAllManufacturer = async (req, res) => {
    try {
        const allManufacturer = await manufacturer.find()
        res.status(200).json(allManufacturer);
    } catch (error) {
        console.error("Error fetching Items:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};


// Get a Item (particular Item)
exports.getAManufacturer = async(req,res)=>{
    const manufacturerId = req.params.id
    try {
        const aManufacturer = await manufacturer.findOne({_id: manufacturerId})
        res.status(200).json({aManufacturer})
    } catch (error) {
        console.error("Error fetching a Item:", error);
        res.status(500).json({ message: "Internal server error." });
    }
}


exports.updateManufacturer = async (req, res) => {
    console.log("Received request to update manufacturer:", req.body);
    
    try {
        const manufacturerId = req.params.id;
        const {
            organizationId,
            name,
            description,
            manfId,
            manfName,
            createdDate,
            updatedDate,
            compName
        } = req.body;

        const updatedManufacturer = await manufacturer.findByIdAndUpdate(
            { _id: manufacturerId },
            {
                organizationId,
                name,
                description,
                manfId,
                manfName,
                createdDate,
                updatedDate,
                compName
            },
            { new: true, runValidators: true }
        );

        if (!updatedManufacturer) {
            console.log("Manufacturer not found with ID:", manufacturerId);
            return res.status(404).json({ message: "Manufacturer not found" });
        }

        res.status(200).json({ message: "Manufacturer updated successfully", manufacturer: updatedManufacturer });
        console.log("Manufacturer updated successfully:", updatedManufacturer);
    } catch (error) {
        console.error("Error updating manufacturer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Delete manufacturer by manf_Id
exports.deletedManufacturer = async (req, res) => {
    const { manf_Id } = req.params;

    try {
        const deletedManufacturer = await manufacturer.findOneAndDelete({ manf_Id });

        if (!deletedManufacturer) {
            return res.status(404).json({ error: 'Manufacturer not found' });
        }

        res.status(200).json({ message: 'Manufacturer deleted successfully', deletedManufacturer });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};