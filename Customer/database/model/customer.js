const mongoose = require("mongoose");
const { Schema } = mongoose;


const customerSchema = new Schema({
    organizationId: {type:String},
    customerType
    firstName
    lastName

    companyName
    customerEmail
    workPhone
    mobile

    dob 
    cardNumber
    
    pan
    currency
    openingBalence
    paymentTerms
    documents



});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;