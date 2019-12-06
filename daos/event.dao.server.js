var eventModel = require('../models/event.model.server');

function createEvent(event) {
	return eventModel.create(event)
}

function findAllEvents() {
	return eventModel.find()
}

function findEventById(eventId) {
	return eventModel.findById(eventId)
}

function findEventByName(eventname) {
	return eventModel.findOne({eventname: eventname})
}

function updateEvent(eventId, eventUpdates) {
	return eventModel.update(
		{_id: eventId},
		{$set: eventUpdates}
	)
}

function deleteEvent(eventId) {
	return eventModel.remove({_id: eventId})
}

module.exports = {
	createEvent, findAllEvents, findEventById,
	findEventByName, updateEvent, deleteEvent
};
