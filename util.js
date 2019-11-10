const rp = require('request-promise-native');

async function getToken() {
  const options = {
    method: 'POST',
    url: 'https://api.petfinder.com/v2/oauth2/token',
    json: {
      "grant_type": "client_credentials",
      "client_id": process.env.CLIENT_ID,
      "client_secret": process.env.CLIENT_SECRET
    }
  }

  let token;

  await rp(options)
    .then(body => {
      token = body.access_token;
    })
    .catch(err => {
      console.log(err);
    })

  return token;
}

module.exports = {
  getToken
};