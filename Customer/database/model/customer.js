const mongoose = require("mongoose");
const { Schema } = mongoose;


const customerSchema = new Schema({
    organizationId: {type:String},
    customerType: {type:String},
    firstName: {type:String},
    lastName: {type:String},

    companyName: {type:String},
    customerEmail: {type:String},
    workPhone: {type:String},
    mobile: {type:String},

    dob : {type:String},
    cardNumber: {type:String},
    
    pan: {type:String},
    currency: {type:String},
    openingBalence: {type:String},
    paymentTerms: {type:String},
    documents: {type:String},



});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;