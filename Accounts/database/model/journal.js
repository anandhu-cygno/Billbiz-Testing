const mongoose = require("mongoose");
const { Schema } = mongoose;

const creditAccountSchema = new Schema({
    accountId: { type: String },
    accountName: { type: String },
    creditamount: { type: String },
    debitamount: { type: String },
  }, { _id: false });

const debitAccountSchema = new Schema({
    accountId: { type: String },
    accountName: { type: String },
    creditamount: { type: String },
    debitamount: { type: String },
  }, { _id: false });


const journalSchema = new Schema({
    organization_Id: {type:String},
    date: {type:String},
    creditAccount: [creditAccountSchema],
    debitAccount: [debitAccountSchema],
    totalAmount: {type:String},
    remark: {type:String},
});

const Journal = mongoose.model("Journals", journalSchema);

module.exports = Journal;