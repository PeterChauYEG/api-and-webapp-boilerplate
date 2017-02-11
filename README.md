# api-and-web-app-boilerplate
## Overview

This is an api and webapp boilerplate. It's got a React + Redux Web app that talks to an Node + MongoDB api.

The front end is create-react-app with additional boilerplate

It's got:
- rotating server log
- JWT-based authentication
- Connection to MongoDB 
- Password encryption with bcrypt
- React for view
- Redux for UI State
- Redux-Saga for Application State
- Local Storage for data persistance
- Tachyons for CSS

To Do:
- Linting
- Unit Testing
- ES7 Features
- Immutable.js for memsharing in state, etc
- Flow for Typing

## Installation

### Config Settings
in the project root, create and edit the config file as desired

```
// config.js
export const API_PASSWORD = x
export const API_SECRET = x
export const API_USER = x
export const DB_NAME = x
export const DB_PASSWORD = x
export const DB_PORT = x
export const DB_URL = x
export const DB_USER = x
export const SALT_ROUNDS = x
```

### Api installation
```
npm i
```

### Web App installation
```
cd client
npm i
```

### Running Deployment
```
cd ..
npm run dev
```

**Important**: **`npm start`** is intended for production only. Use `npm run dev`.

## Deployment

### Build the client
```
cd client && npm run build
```

### start api
```
cd ..
npm start
```

## Access
The api can be accessed at `/api`

public routes:
- /
- setup: generate initial user
- authenticate: to get a token which allows private route access

private routes:
- profile

## DevOps
- a shell script can be found under `./scripts` while allows for autostarting this api-and-web-app-boilerplate on a raspberry pi (Raspbian). 

## API :8081
### Features
`./log` - rotating access log with env control
mongoose driver for mongodb
JWT protected routes
Passwords are bcrypted
Relevance Tag searching

### Route
`/` - webapp client with env control
`/setup` - initializes the api. creates a user.
`/api/` - home
`/api/authenticate` - authenticates a user with a password and returns a JWT
`/api/minions` -  CR minions from the database

## Mongo Database

### collections
Minions
Users - password stored with bcrypt

## Webapp :8080
based on [create-react-app](https://github.com/facebookincubator/create-react-app)

### CSS
Favicon - `#333333`

### Features
esLint - Linter (to be implemented)
Jest - unit testing (to be implemented)
Redux - UI state
Tachyons - CSS Library
React - View Layer
Local Storage - Data persistance
    Application State
Lodash - helper functions
    Throttle
Redux-Saga - Async calls + actions

### Network Calls
`/api/minion` - add a minion with POST
`/api/authenticate` - authenticates a user
`/api/minions` - GETs all minions

### Routes
`/` - root
`/login` - for user login

with <3,


L a b o r a t o r y O n e