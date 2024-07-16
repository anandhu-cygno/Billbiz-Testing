const mongoose = require('mongoose')

const manufacturerSchema = new mongoose.Schema ({

organizationId : {type:String},
name : {type:String},
description : {type:String},
manfId : {type:String},
manfName : {type:String},
createdDate: {type:String},
updatedDate:{type:String},
compName:{type:String}

})

const manufacturer = mongoose.model("manufacturer" , manufacturerSchema)

module.exports = manufacturer