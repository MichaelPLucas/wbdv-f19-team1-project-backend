# wbdv-f19-team1-project-backend

This is the nodejs/express backend for our project.

## Setting up the server

In order for the server to operate properly you'll need to make a .env file in the top level directory of the server files which contains your API keys. This will allow the startup code for the server to set your API keys as environment variables. The format for the file is as follows.

```
CLIENT_ID=[client id key]
CLIENT_SECRET=[secret api key]
```

After creating this file simply run `npm install` to ensure all packages are installed and up to date, then run `npm start` and the server will be started on port 3000. This file will only need to be created once on project setup, though updating may be necessary as more environment variables need to be set for server execution.
