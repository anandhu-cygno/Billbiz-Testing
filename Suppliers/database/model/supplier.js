const mongoose = require("mongoose");
const { Schema } = mongoose;
 
 
const contactPersonsSchema = new Schema({
    salutation: {type:String},
    firstName: {type:String},
    lastName: {type:String},
    email: {type:String},
    mobile: {type:String},
  }, { _id: false });
 
 
const supplierSchema = new Schema({
    organizationId: {type:String},
    accountId: {type:String},
    createdDate: {type:String},
    lastModifiedDate: {type:String},
    salutation: {type:String},
    firstName: {type:String},
    lastName: {type:String},
    companyName: {type:String},
    supplierEmail: {type:String},
    workPhone: {type:String},
    mobile: {type:String},
    gstNo: {type:String},
    balance: {type:String},
    creditDays: {type:String},
    creditLimit: {type:String},
    interestPercentage: {type:String},
    discountPercentage: {type:String},
 
    //Other Details:-
    pan: {type:String},
    currency: {type:String},
    openingBalance:{type:String},
    paymentTerms:{type:String},
    tds: {type:String},
    uploadFiles: {type:String},
    wedsiteUrl: {type:String},
    department: {type:String},
    designation: {type:String},
    twitter: {type:String},
    skypeName: {type:String},
    facebook: {type:String},
   
    //Billing Address:-
    billingAttention: {type:String},
    billingCountry: {type:String},
    billingAddress: {type:String},
    billingCity: {type:String},
    billingState: {type:String},
    billingPinCode: {type:String},
    billingPhone: {type:String},
    billingFaxNum: {type:String},
   
    //Shipping Address:-
    shippingAttention: {type:String},
    shippingCountry: {type:String},
    shippingAddress: {type:String},
    shippingCity: {type:String},
    shippingState: {type:String},
    shippingPinCode: {type:String},
    shippingPhone: {type:String},
    shippingFaxNum: {type:String},
 
    //Contact Persons:-
    contactPersons: [contactPersonsSchema],
 
    //customerFields: {type:String},
    remarks: {type:String},
});
 
const Supplier = mongoose.model("Supplier", supplierSchema);
 
module.exports = Supplier;