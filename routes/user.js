const express = require('express');
const router = express.Router()
var userDao = require('../daos/user.dao.server');
var animalDao = require('../daos/animal.dao.server');

function createUser(req, res) {
  var user = req.body
  userDao
    .createUser(user)
    .catch(err => res.send(err))
    .then(response => res.send(response))
}

function findAllUsers(req, res) {
  userDao
    .findAllUsers()
    .then(users => {
      users.map(x => x.password = undefined);
      res.send(users);
    })
}

function findUserById(req, res) {
  var userId = req.params['sid'];
  userDao
    .findUserById(userId)
    .then(user => {
      user.password = undefined;
      res.json(user);
    })
}

function findUserByUsername(req, res) {
  var username = req.params['username'];
  userDao
    .findUserByUsername(username)
    .then(user => {
      user.password = undefined;
      res.json(user);
    })
}

function updateUser(req, res) {
  console.log("update user")
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

function login(req, res) {
  let username = req.params.username;
  let password = req.params.password;
  userDao.findUserByUsername(username)
    .then(user => {
      if (!user)
        return
      if (user.password === password) {
        user.password = undefined;
        res.json(user);
      } else {
        res.status(400).json({ error: 'permission denied' });
      }
    });
}

function addAnimal(req, res) {
  var userId = req.params['sid'];
  var animalId = req.params['aid'];
  animalDao
    .addUser(animalId, userId)
    .then(status => console.log(status))
  userDao
    .addAnimal(userId, animalId)
    .then(status => res.json(status))
}

function getAnimals(req, res) {
  var userId = req.params['sid'];
  userDao
    .findUserById(userId)
    .then(user => {
      res.json(user.animals);
    });
}

function getUsersByIdBatch(req, res) {
  userDao.getUsersByIdBatch(req.body.userIds)
    .then(users => {
      users.map(x => x.password = undefined);
      res.json(users);
    })
}

function searchForUsers(req, res) {
  userDao.searchByUsername(req.params.searchText)
    .then(users => {
      users.map(x => x.password = undefined);
      res.json(users)
    });
}

router.post('/', createUser);
router.get('/', findAllUsers);
router.get('/:sid', findUserById);
router.get('/username/:username', findUserByUsername);
router.put('/:sid', updateUser);
router.put('/:sid/:aid', addAnimal);
router.delete('/:sid', deleteUser);
router.get('/:sid/animals', getAnimals);
router.get('/login/:username/:password', login);
router.post('/getBatch', getUsersByIdBatch);
router.get('/search/:searchText', searchForUsers);

module.exports = router;
