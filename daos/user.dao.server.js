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

function searchByUsername(searchText) {
  return userModel.find(
    { username: { $regex: searchText, $options: "i" } }
  );
}

module.exports = {
	createUser, findAllUsers, findUserById,
	findUserByUsername, updateUser, deleteUser, searchByUsername
};