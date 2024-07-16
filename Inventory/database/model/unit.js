const mongoose = require("mongoose");
const { Schema } = mongoose;


// Define unitConversionSchema before using it in unitSchema
const unitConversionSchema = new Schema({
    targetUnit: { type: String },
    unitConversionRate: { type: String },
  }
//   , { _id: false }
);

// Define unitSchema
const unitSchema = new Schema({
    organizationId: {type: String},
    unitName: {type: String},
    symbol: {type: String},
    quantityCode: {type: String},
    precision: {type: String},

    unitConversion: [unitConversionSchema],
});



const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;