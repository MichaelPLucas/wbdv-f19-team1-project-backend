var userDao = require('../daos/user.dao.server');

module.exports = function (app) {

	console.log('user service server')

	function createUser(req, res) {
		console.log('createUser')
		var user = req.body
		console.log(user)
		userDao
			.createUser(user)
			.then(response => res.send(response))
	}

	function findAllUsers(req, res) {
		console.log('findAllUsers')
		userDao
			.findAllUsers()
			.then(users => res.send(users))
	}

	function findUserById(req, res) {
		var userId = req.params['sid'];
		userDao
			.findUserById(userId)
			.then(user => res.json(user))
	}

	function findUserByUsername(req, res) {
		var username = req.params['username'];
		userDao
			.findUserByUsername(username)
			.then(user => res.json(user))
	}

	function updateUser(req, res) {
		var userId = req.params['sid'];
		var userUpdates = req.body
		userDao
			.updateUser(userId, userUpdates)
			.then(status => res.json(status))
	}

	function deleteUser(req, res) {
		var userId = req.params['sid'];
		userDao
			.deleteUser(userId)
			.then(status => res.json(status))
	}

	app.post('/users', createUser);
	app.get('/users', findAllUsers);
	app.get('/users/:sid', findUserById);
	app.get('/users/username/:username', findUserByUsername);
	app.put('/users/:sid', updateUser);
	app.delete('/users/:sid', deleteUser);
}