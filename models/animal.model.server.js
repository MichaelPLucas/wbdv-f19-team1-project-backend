var mongoose = require('mongoose');
var animalSchema = require('./animal.schema.server')

var animalModel =
	mongoose.model(
		'AnimalSchema',
		animalSchema);

module.exports = animalModel