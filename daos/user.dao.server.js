var mongoose = require('mongoose');
var userModel = require('../models/user.model.server');

function createUser(user) {
	return userModel.create(user)
}

function findAllUsers() {
	return userModel.find()
}

function findUserById(userId) {
	return userModel.findById(userId)
}

function findUserByUsername(username) {
	return userModel.findOne({username: username})
}

function updateUser(userId, userUpdates) {
	return userModel.findByIdAndUpdate(
		mongoose.Types.ObjectId(userId),
		{$set: userUpdates},
		{new: true}
	)
}

function deleteUser(userId) {
	return userModel.remove({_id: userId})
}

function addAnimal(userId, animalId) {
	return userModel.findByIdAndUpdate(userId,
		{ $push: { animals: animalId }},
		{new: true}
)}

function getUsersByIdBatch(userIds) {
  return userModel.find({ _id: { $in: userIds.map(id => mongoose.Types.ObjectId(id)) } });
}

function searchByUsername(searchText) {
	return userModel.find(
	  { username: { $regex: searchText, $options: "i" } }
	);
}

function addFriend(userId, friendId) {
  return userModel.findByIdAndUpdate(
	userId,
	{ $push: { friends: friendId } },
	{ new: true }
  );
}

module.exports = {
	createUser, findAllUsers, findUserById,
	findUserByUsername, updateUser, deleteUser, 
	addAnimal, searchByUsername, getUsersByIdBatch, addFriend
}