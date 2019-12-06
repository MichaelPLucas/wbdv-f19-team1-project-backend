var mongoose = require('mongoose');
var eventSchema = require('./event.schema.server');

var eventModel =
	mongoose.model(
		'EventModel',
		eventSchema);

module.exports = eventModel;
