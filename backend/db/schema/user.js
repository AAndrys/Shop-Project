const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [5, "Email must be longer than 5 characters."],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: [20, "Username must be shorter than 20 characters."],
    trim: true,
  },
  password: {
    type: String,
    minlength: [8, "Password must be longer than 8 characters."],
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  accessToken: {
    type: String,
    default: "",
    trim: true,
  },
  refreshToken: {
    type: String,
    default: "",
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
