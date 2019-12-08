var mongoose = require('mongoose');
var animalModel = require('../models/animal.model.server');

function createAnimal(animal) {
	return animalModel.create(animal)
}

function findAllAnimals() {
	return animalModel.find()
}

function findAnimalById(animalId) {
	return animalModel.findById(animalId)
}

function findAnimalByApiId(apiId) {
	return animalModel.findOne({apiId: apiId})
}

function addUser(animalId, userId) {
	return animalModel.update(
        { apiId: animalId },
		{ $push: { users: userId }},
		{new: true}
	)
}

function updateAnimal(animalId, animalUpdates) {
	return animalModel.findByIdAndUpdate(
		mongoose.Types.ObjectId(animalId),
		{$set: animalUpdates},
		{new: true}
	)
}

function deleteAnimal(animalId) {
	return animalModel.remove({_id: animalId})
}

function getBatchByAPIIds(apiIds) {
  return animalModel.find(
    { apiId: { $in: apiIds } }
  );
}

module.exports = {
	createAnimal, findAllAnimals, findAnimalById,
    updateAnimal, deleteAnimal, addUser, findAnimalByApiId, getBatchByAPIIds
};