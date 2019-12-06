const express = require('express');
const router = express.Router();
var eventDao = require('../daos/event.dao.server');

/* GET route for all */
router.get('/', (req, res) => {
  eventDao
    .findAllEvents()
    .then(events => res.json(events));
});

/* GET route for id */
router.get('/:eid', (req, res) => {
  eventDao
    .findEventById(req.params.eid)
    .then(event => res.json(event));
});

/* GET route for search */
router.get('/search/:searchText', (req, res) => {
  eventDao
    .searchByName(req.params.searchText)
    .then(events => res.json(events));
});

/* POST route for creation */
router.post('/', (req, res) => {
  eventDao
    .createEvent(req.body)
    .then(event => res.json(event));
});

/* PUT route for update */
router.put('/:eid', (req, res) => {
  eventDao
    .updateEvent(req.params.eid, req.body)
    .then(event => res.json(event));
});

/* PUT route for registering a new user to the event */
router.put('/register/:eid/:uid', (req, res) => {
  eventDao
    .registerUser(req.params.eid, req.params.uid)
    .then(event => res.json(event));
});

/* DELETE route for delete */
router.delete('/:eid', (req, res) => {
  eventDao
    .deleteEvent(req.params.eid)
    .then(status => res.json(status));
});

module.exports = router;
