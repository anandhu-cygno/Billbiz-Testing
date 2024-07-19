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
<<<<<<< HEAD
    creditDays: {type:String},
    creditLimit: {type:String},
    interestPercentage: {type:String},

=======
    balance: {type:String},
    creditDays: {type:String},
    creditLimit: {type:String},
    interestPercentage: {type:String},
    discountPercentage: {type:String},
 
>>>>>>> bf9a6eb82eee609d60055131934b0d43c2b79bb5
    //Other Details:-
    pan: {type:String},
    currency: {type:String},
    openingBalance:{type:String},
    paymentTerms:{type:String},
    tds: {type:String},
<<<<<<< HEAD
    uploadFiles: [],
=======
    uploadFiles: {type:String},
>>>>>>> bf9a6eb82eee609d60055131934b0d43c2b79bb5
    wedsiteUrl: {type:String},
    department: {type:String},
    designation: {type:String},
    twitter: {type:String},
    skypeName: {type:String},
    facebook: {type:String},
<<<<<<< HEAD
    
=======
   
>>>>>>> bf9a6eb82eee609d60055131934b0d43c2b79bb5
    //Billing Address:-
    billingAttention: {type:String},
    billingCountry: {type:String},
    billingAddress: {type:String},
    billingCity: {type:String},
    billingState: {type:String},
    billingPinCode: {type:String},
    billingPhone: {type:String},
    billingFaxNum: {type:String},
<<<<<<< HEAD
    
=======
   
>>>>>>> bf9a6eb82eee609d60055131934b0d43c2b79bb5
    //Shipping Address:-
    shippingAttention: {type:String},
    shippingCountry: {type:String},
    shippingAddress: {type:String},
    shippingCity: {type:String},
    shippingState: {type:String},
    shippingPinCode: {type:String},
    shippingPhone: {type:String},
    shippingFaxNum: {type:String},
<<<<<<< HEAD

    //Contact Persons:-
    contactPersons: [contactPersonsSchema],

    //Bank Details:-
    bankDetails: [bankDetailsSchema],

    customerFields: {type:String},
    remarks: {type:String},

    status: {type:String},
});

const Supplier = mongoose.model("Supplier", supplierSchema);

=======
 
    //Contact Persons:-
    contactPersons: [contactPersonsSchema],
 
    //customerFields: {type:String},
    remarks: {type:String},
});
 
const Supplier = mongoose.model("Supplier", supplierSchema);
 
>>>>>>> bf9a6eb82eee609d60055131934b0d43c2b79bb5
module.exports = Supplier;