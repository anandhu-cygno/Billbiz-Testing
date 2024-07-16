const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
  organizationName: { type: String },
  organizationId: { type: String },
  userName: { type: String },
  userNum: { type: String },
  useremail: { type: String },
  password: { type: String },
  access: { type: String },
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;