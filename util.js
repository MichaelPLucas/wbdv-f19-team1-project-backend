const request = require('request');

const getToken = () => {
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
}

export default {
  getToken
};