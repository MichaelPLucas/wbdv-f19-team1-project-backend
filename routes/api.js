var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/token', (req, res, next) => {
  request
    .post('https://api.petfinder.com/v2/oauth2/token')
    .json({
      "grant_type": "client_credentials",
      "client_id": process.env.CLIENT_ID,
      "client_secret": process.env.CLIENT_SECRET
    })
    .on('data', data => {
      res.status(200).send(data);
    })
    .on('error', err => {
      console.log(err);
    });
});

module.exports = router;
