const express = require("express");
const router = express.Router();
var animalDao = require("../daos/animal.dao.server");

function createAnimal(req, res) {
  var animal = req.body;
  animalDao
    .createAnimal(animal)
    .catch(err => res.send(err))
    .then(response => res.send(response));
}

function findAllAnimals(req, res) {
  animalDao.findAllAnimals().then(animals => {
    animals.map(x => (x.password = undefined));
    res.send(animals);
  });
}

function findAnimalById(req, res) {
  var animalId = req.params["sid"];
  animalDao.findAnimalByApiId(animalId).then(animal => {
    res.json(animal);
  });
}

function updateAnimal(req, res) {
  var animalId = req.params["sid"];
  var animalUpdates = req.body;
  animalDao
    .updateAnimal(animalId, animalUpdates)
    .then(status => res.json(status));
}

function deleteAnimal(req, res) {
  var animalId = req.params["sid"];
  animalDao.deleteAnimal(animalId).then(status => res.json(status));
}

function addUser(req, res) {
  var animalId = req.params["sid"];
  var userId = req.params["uid"];
  userDao.addAnimal(userId, animalId).then(status => console.log(status));
  animalDao.addUser(animalId, userId).then(status => res.json(status));
}

function getUsers(req, res) {
  var animalId = req.params["sid"];
  animalDao.findAnimalByApiId(animalId).then(animal => {
    res.json(animal.users);
  });
}

function getUserCount(req, res) {
  var animalId = req.params["sid"];
  animalDao.findAnimalByApiId(animalId).then(animal => {
    res.json(animal.users.length);
  });
}

function getBatch(req, res) {
  animalDao.getBatchByAPIIds(req.body.apiIds)
    .then(animals => res.json(animals))
}

router.post("/", createAnimal);
router.get("/", findAllAnimals);
router.get("/:sid", findAnimalById);
router.put("/:sid", updateAnimal);
router.put("/:sid/:uid", addUser);
router.delete("/:sid", deleteAnimal);
router.get("/:sid/users", getUsers);
router.get("/:sid/users/count", getUserCount);
router.post("/getBatch", getBatch);

module.exports = router;
