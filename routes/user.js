const express = require('express');
const router = express.Router()
var userDao = require('../daos/user.dao.server');

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

router.post('/', createUser);
router.get('/', findAllUsers);
router.get('/:sid', findUserById);
router.get('/username/:username', findUserByUsername);
router.put('/:sid', updateUser);
router.delete('/:sid', deleteUser);
router.get('/login/:username/:password', login);

module.exports = router;
