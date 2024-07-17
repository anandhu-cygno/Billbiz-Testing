const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
    organizationId: {type: String},
    itemType: { type: String, enum: ['Goods', 'Service'] },
    itemName: { type: String},
    sku: { type: String, unique: true },
    unit: { type: [String] },
    manufacturer: { type: [String] },
    brand: { type: [String] },
    sellingPrice: { type: Number },
    salesAccount: { type: [String] },
    salesDescription: { type: String },
    categories: { type: [String] },
    rack: { type: [String] },
    costPrice: { type: Number },
    purchaseAccount: { type: [String] },
    purchaseDescription: { type: String },
    preferredVendor: { type: [String] },
    mrp: { type: Number },
    tax: { type: String },
    hsn: { type: String },
    cess: { type: String },
    alterUnit: { type: [String] },
    quantityAlertLevel: { type: String },
    productUsage: { type: String },
    createdDate: { type: String },
    updatedDate: { type: String },
    barcodePrefix: { type: String },
    warranty: { type: String },
    itemImage: { type: String },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;