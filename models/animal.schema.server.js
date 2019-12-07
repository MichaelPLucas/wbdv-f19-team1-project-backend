var mongoose = require("mongoose");
var relationship = require("mongoose-relationship");

var animalSchema = mongoose.Schema(
  {
    apiId: String,
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserSchema"
      }
    ]
  },
  { collection: "animals" }
);

module.exports = animalSchema;
