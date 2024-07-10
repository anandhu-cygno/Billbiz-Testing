const Organization = require("../database/model/organization");
const Item = require("../database/model/item");


// Add item
exports.addItem = async (req, res) => {
    console.log("Add Item:", req.body);
    try {
      const {       
        itemType,
        itemName,
        sku,
        unit,
        manufacturer,
        brand,
        sellingPrice,
        salesAccount,
        salesDescription,
        categories,
        rack,
        costPrice,
        purchaseAccount,
        purchaseDescription,
        preferredVendor,
        itemImage
      } = req.body;
  
    //   // Check if an item with the same organizationId already exists
    //   const existingItem = await Item.findOne({ _id });
  
    //   if (existingItem) {
    //     return res.status(409).json({
    //       message: "This item already exists.",
    //     });
    //   }
  
      // Create a new item
      const newItem = new Item({
        itemType,
        itemName,
        sku,
        unit,
        manufacturer,
        brand,
        sellingPrice,
        salesAccount,
        salesDescription,
        categories,
        rack,
        costPrice,
        purchaseAccount,
        purchaseDescription,
        preferredVendor,
        itemImage
      });
      await newItem.save();
  
      res.status(201).json({
        message: "New Item created successfully."
      });
      console.log("New Item created successfully:");
    } catch (error) {
      console.error("Error creating Item:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };



// Get all item
exports.getAllItem = async (req, res) => {
    try {
        const allItem = await Item.find()
        res.status(200).json(allItem);
    } catch (error) {
        console.error("Error fetching Items:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};


// Get a Item (particular Item)
exports.getAItem = async(req,res)=>{
    const itemId = req.params.id
    try {
        const item = await Item.findOne({_id: itemId})
        res.status(200).json({item})
    } catch (error) {
        console.error("Error fetching a Item:", error);
        res.status(500).json({ message: "Internal server error." });
    }
}


// Update Item
exports.updateItem = async (req, res) => {
  console.log("Received request to update item:", req.body);
 
  try {
      const itemId = req.params.id;
      const {
          itemType,
          itemName,
          sku,
          unit,
          manufacturer,
          brand,
          sellingPrice,
          salesAccount,
          salesDescription,
          categories,
          rack,
          costPrice,
          purchaseAccount,
          purchaseDescription,
          preferredVendor,
          itemImage
      } = req.body;


      const updatedItem = await Item.findByIdAndUpdate({_id: itemId},
          {
              itemType,
              itemName,
              sku,
              unit,
              manufacturer,
              brand,
              sellingPrice,
              salesAccount,
              salesDescription,
              categories,
              rack,
              costPrice,
              purchaseAccount,
              purchaseDescription,
              preferredVendor,
              itemImage
          },
          { new: true, runValidators: true }
      );

      if (!updatedItem) {
          console.log("Item not found with ID:", _id);
          return res.status(404).json({ message: "Item not found" });
      }

      res.status(200).json({ message: "Item updated successfully", item: updatedItem });
      console.log("Item updated successfully:", updatedItem);
  } catch (error) {
      console.error("Error updating item:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};



// Delete an item
exports.deleteItem = async (req, res) => {
  try {
      const itemId = req.params.id;
      const deletedItem = await Item.findByIdAndDelete(itemId);

      if (!deletedItem) {
          return res.status(404).json({ message: 'Item not found' });
      }

      res.json({ message: 'Item deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
};



