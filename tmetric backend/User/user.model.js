const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
});

// feedback: fw17_1126 - Model name should be Pascal case ex: it should be User instead user
const userModel = new mongoose.model("user", userSchema);

module.exports = userModel;
