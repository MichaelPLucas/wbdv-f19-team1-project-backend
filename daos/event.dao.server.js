var eventModel = require('../models/event.model.server');

function createEvent(event) {
	return eventModel.create(event)
}

function findAllEvents() {
	return eventModel.find()
}

function findEventById(eventId) {
  return eventModel.findOne({ _id: eventId })
}

function searchByName(name) {
  return eventModel.find(
    { name: { $regex: name, $options: "i" } }
  )
}

function updateEvent(eventId, eventUpdates) {
	return eventModel.update(
		{_id: eventId},
		{$set: eventUpdates}
	)
}

function registerUser(eventId, userId) {
  return eventModel.update(
    { _id: eventId },
    { $push: { going: userId } }
  )
}

function deleteEvent(eventId) {
	return eventModel.remove({_id: eventId})
}

module.exports = {
	createEvent, findAllEvents, findEventById, searchByName, updateEvent, registerUser, deleteEvent
};
