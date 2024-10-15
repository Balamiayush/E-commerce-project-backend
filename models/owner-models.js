const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  gstin: {
    type: String,
  },

  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model('owner', ownerSchema)