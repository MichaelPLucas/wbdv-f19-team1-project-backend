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
          return {
            name: x.name,
            photo: x.photos[0] ? x.photos[0].full : null,
            description: x.description,
            breed: x.breeds.primary,
            id: x.id
          };
        });

        res.status(200).send(msg);
      })
    })
    .catch(err => {
      return err;
    })
});

/* GET route for id based search */
router.get('/:id', (req, res, next) => {
  util.getToken()
    .then(token => {
      const options = {
        method: 'GET',
        url: 'https://api.petfinder.com/v2/animals/' + req.params.id,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };

      request(options, (err, _, body) => {
        if (err) {
          console.log(err);
        }

        const msg = {
          name: body.animal.name,
          photo: body.animal.photos[0] ? body.animal.photos[0].full : null,
          description: body.animal.description,
          breed: body.animal.breeds.primary,
          id: body.animal.id
        };

        res.status(200).send(msg);
      })
    })
    .catch(err => {
      return err;
    })
});

module.exports = router;