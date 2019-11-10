const express = require('express');
const router = express.Router();
const request = require('request');
const util = require('../util');

/* POST route for keyword search */
router.post('/', (req, res, next) => {
  let urlParams = '';
  for (let prop in req.body) {
    if (req.body.hasOwnProperty(prop)) {
      urlParams += prop + '=' + req.body[prop] + '&';
    }
  }
  
  util.getToken()
    .then(token => {
      const options = {
        method: 'GET',
        url: 'https://api.petfinder.com/v2/animals?' + urlParams.slice(0, urlParams.length - 1),
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };

      request(options, (err, _, body) => {
        if (err) {
          console.log(err);
        }

        const msg = body.animals.map(x => {
          console.log(x)
          return {
            name: x.name,
            photo: x.photos[0] ? x.photos[0].full : null,
            description: x.description,
            breed: x.breeds.primary
          };
        });

        res.status(200).send(msg);
      })
    })
    .catch(err => {
      return err;
    })
});

module.exports = router;
