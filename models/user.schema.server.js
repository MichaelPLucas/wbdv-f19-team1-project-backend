var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    username: String,
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    animals: [
      {
        type: String,
        ref: "AnimalSchema.apiId"
      }
    ],
    createdAt: { type: Date, default: Date.now }
  },
  { collection: "users" }
);

module.exports = userSchema;
