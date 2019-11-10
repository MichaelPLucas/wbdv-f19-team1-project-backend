# wbdv-f19-team1-project-backend

This is the nodejs/express backend for our project.

## Setting up the server

In order for the server to operate properly you'll need to make a .env file in the top level directory of the server files which contains your API keys. This will allow the startup code for the server to set your API keys as environment variables. The format for the file is as follows.

```
CLIENT_ID=[client id key]
CLIENT_SECRET=[secret api key]
```

After creating this file simply run `npm install` to ensure all packages are installed and up to date, then run `npm start` and the server will be started on port 3000. This file will only need to be created once on project setup, though updating may be necessary as more environment variables need to be set for server execution.

## Routes

### POST /api/

This route allows for keyword searches within the petfinder api. The format for the body of requests to this route is as follows.

```
{
  property1: value1,
  property2: value2,
  ...
}
```

Where accepted properties are the ones listed in the [petfinder API documentation](https://www.petfinder.com/developers/v2/docs/#get-animals).

### GET /api/:id

This route allows you to get one animal using the petfinder api and their id. Simply url encode the id by placing it where :id appears in the url template.