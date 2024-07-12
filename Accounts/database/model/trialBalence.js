const mongoose = require("mongoose");
const { Schema } = mongoose;


const trialBalenceSchema = new Schema({
    organizationId: {type:String},
    transaction_id: {type:String},

    date: {type:String},

    account_id: {type:String},
    accountName: {type:String},

    action: {type:String},
    
    debitAmount: {type:String},
    creditAmount: {type:String},
    balence: {type:String},
    remark: {type:String},
});

const TrialBalences = mongoose.model("TrialBalences", trialBalenceSchema);

module.exports = TrialBalences;