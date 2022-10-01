const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
});

const userModel = new mongoose.model("user", userSchema);

module.exports = userModel;
