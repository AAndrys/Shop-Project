const mongoose = require("mongoose");

const ShopItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    minlength: [1, "Item name must be longer than 1 character."],
  },
  itemDesc: {
    type: String,
    required: false,
  },
  itemPrice: {
    type: Number,
    required: true,
    minlength: [1, "Item price must be longer than 1 number."],
  },
  sale: {
    type: Boolean,
    required: false,
  },
  saleDiscount: {
    type: Number,
    required: false,
    minlength: [1, "Item sale discount must be longer than 1 number."],
  },
  itemFirstImage: {
    type: Image,
    required: false,
  },
  imagesNodeList: {
      type: Image,
      required: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("ShopItem", ShopItemSchema);
