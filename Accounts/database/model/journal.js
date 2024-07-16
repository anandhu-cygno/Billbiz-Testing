const mongoose = require("mongoose");
const { Schema } = mongoose;


const transactionSchema = new Schema({
    accountId: { type: String },
    accountName: { type: String },
    creditamount: { type: String },
    debitamount: { type: String },
    description: { type: String },
    contact: { type: String },
  }, { _id: false });


const journalSchema = new Schema({
    organization_Id: {type:String},
    date: {type:String},
    reference: {type:String},
    note: {type:String},
    cashBasedJournal: {type:String},
    currency: {type:String},
    transaction: [transactionSchema],
    totalDebitAmount: {type:String},
    totalCreditAmount: {type:String},

});

const Journal = mongoose.model("Journals", journalSchema);

module.exports = Journal;