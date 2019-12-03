var mongoose = require('mongoose');
var shelterSchema = require('./shelter.schema.server')

var shelterModel =
	mongoose.model(
		'ShelterModel',
		shelterSchema);

module.exports = shelterModel