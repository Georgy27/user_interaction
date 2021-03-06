const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String },
  gender: { type: String },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Posts", Post);
