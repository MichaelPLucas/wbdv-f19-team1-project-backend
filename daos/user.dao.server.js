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
	return userModel.update(
		{_id: userId},
		{$set: userUpdates}
	)
}

function deleteUser(userId) {
	return userModel.remove({_id: userId})
}

module.exports = {
	createUser, findAllUsers, findUserById,
	findUserByUsername, updateUser, deleteUser
};