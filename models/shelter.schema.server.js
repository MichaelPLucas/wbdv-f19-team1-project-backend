var mongoose = require('mongoose')

var shelterSchema = mongoose.Schema({
	_id: Number,
	username: String,
	password: {type: String, required: true},
	name: String,
	createdAt: {type: Date, default: Date.now}
}, {collection: 'shelters'});

module.exports = shelterSchema;