var shelterDao = require('../daos/shelter.dao.server');

module.exports = function (app) {

	console.log('shelter service server')

	function createShelter(req, res) {
		console.log('createShelter')
		var shelter = req.body
		console.log(shelter)
		shelterDao
			.createShelter(shelter)
			.then(response => res.send(response))
	}

	function findAllShelters(req, res) {
		console.log('findAllShelters')
		shelterDao
			.findAllShelters()
			.then(shelters => res.send(shelters))
	}

	function findShelterById(req, res) {
		var shelterId = req.params['sid'];
		shelterDao
			.findShelterById(shelterId)
			.then(shelter => res.json(shelter))
	}

	function findShelterByName(req, res) {
		var name = req.params['name'];
		shelterDao
			.findShelterBySheltername(name)
			.then(shelter => res.json(shelter))
	}

	function updateShelter(req, res) {
		var shelterId = req.params['sid'];
		var shelterUpdates = req.body
		shelterDao
			.updateShelter(shelterId, shelterUpdates)
			.then(status => res.json(status))
	}

	function deleteShelter(req, res) {
		var shelterId = req.params['sid'];
		shelterDao
			.deleteShelter(shelterId)
			.then(status => res.json(status))
	}

	app.post('/shelters', createShelter);
	app.get('/shelters', findAllShelters);
	app.get('/shelters/:sid', findShelterById);
	app.get('/shelters/name/:name', findShelterByName);
	app.put('/shelters/:sid', updateShelter);
	app.delete('/shelters/:sid', deleteShelter);
}