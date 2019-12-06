var mongoose = require('mongoose')

var eventSchema = mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  description: String,
  users: [mongoose.Schema.Types.ObjectId],
	createdAt: {type: Date, default: Date.now}
}, {collection: 'events'});

module.exports = eventSchema;
