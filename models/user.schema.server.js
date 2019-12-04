var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
	username: String,
	password: {type: String, required: true},
	firstName: String,
	lastName: String,
	createdAt: {type: Date, default: Date.now}
}, {collection: 'users'});

module.exports = userSchema;