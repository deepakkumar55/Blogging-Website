const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String }, // URL to user's profile image
    bio: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" }, // Role-based access control
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
