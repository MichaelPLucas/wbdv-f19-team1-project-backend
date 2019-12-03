var shelterModel = require('../models/shelter.model.server');

function createShelter(shelter) {
	return shelterModel.create(shelter)
}

function findAllShelters() {
	return shelterModel.find()
}

function findShelterById(shelterId) {
	return shelterModel.findById(shelterId)
}

function findShelterBySheltername(sheltername) {
	return shelterModel.findOne({sheltername: sheltername})
}

function updateShelter(shelterId, shelterUpdates) {
	return shelterModel.update(
		{_id: shelterId},
		{$set: shelterUpdates}
	)
}

function deleteShelter(shelterId) {
	return shelterModel.remove({_id: shelterId})
}

module.exports = {
	createShelter, findAllShelters, findShelterById,
	findShelterBySheltername, updateShelter, deleteShelter
};