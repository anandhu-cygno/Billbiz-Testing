const mongoose = require("mongoose")

// const organizationSchema = mongoose.Schema({
//     companyName: { type: String },
//     companyEmail: { type: String},
// })

const organizationSchema = mongoose.Schema({
    organizationLogo: { type: String },
    organizationName: { type: String},
})

const organizations = mongoose.model("organizations",organizationSchema)

module.exports = organizations