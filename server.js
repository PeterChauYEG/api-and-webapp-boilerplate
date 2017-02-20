// BASE SETUP
// =============================================================================
// Requests are proxyed in from PORT 8080
// Any request none matching on the client will be proxied to us

// call the packages we need
import bodyParser from 'body-parser'
import express from 'express'

// auth dep
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// logging dep
import * as fs from 'fs';
import FileStreamRotator from 'file-stream-rotator'
import morgan from 'morgan'
import path from 'path'

// database dep
import mongoose from 'mongoose'

// import db models
import Minion from './db/models/minion'
import User from './db/models/user'

// import config
import {
  API_PASSWORD,
  API_SECRET,
  API_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_URL,
  DB_USER,
  SALT_ROUNDS,
} from './config'

// import log directory
const logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYY-MM-DD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
});

// initialize express
const app = express()

// correct mongoose mpromise deprecation warning
mongoose.Promise = global.Promise

// connect to our db
mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}.mlab.com:${DB_PORT}/${DB_NAME}`)

// secret variable
app.set('API_SECRET', API_SECRET)

// set port which api will run on
app.set('port', (process.env.PORT || 8081))

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build/'));
}

// serve the client
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// serve the /setup route
// initializes the api
app.get('/setup', (req, res) => {

  // get number of user in db
  User.count({}, (err, count) => {
    if (err) {
      res.send(err)
    }

    // check if there are already user in the db
    if (count !== 0) {

      // exit if there are already user in the DB
      return res.send({
        success: false,
        message: 'api already initialized'
      })
    }

    // bcrypt the password
    // generate a salt and hash the password async
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
      if (err) {
        res.send(err)
      }

      // hash the password
      bcrypt.hash(API_PASSWORD, salt, (err, hash) => {
        if (err) {
          res.send(err)
        }

        // create an admin user
        const admin = new User({
          dateCreated: new Date(),
          name: API_USER,
          password: hash,
          admin: true,
        })

        // save user to user table in DB
        admin.save((err) => {
          if (err) {
            res.send(err)
          }

          res.json({ success: true })
        })

      })
    })

  })
})

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router()

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {

  // middleware to use for all requests
  // log stream with morgan
  router.use(morgan('combined', { stream: accessLogStream }))
} else if (process.env.NODE_ENV === 'development') {

  // use morgan to log request to the console
  router.use(morgan('dev'))
}

// accessed at GET http://localhost:8081/api
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the api boilerplate.'
  })
})


// on routes that end in /authenticate
// -----------------------------------------------------------------------------
router.route('/authenticate')
  .post((req, res) => {
    const {
      name,
      password,
    } = req.body

    // find the user
    User.findOne({
      name,
    }, function(err, user) {
      if (err) {
        res.send(err)
      }

      // check if user is exists
      if(!user) {

        // return error
        return res.json({
          success: false,
          message: 'Authentication failed. User not found.',
        })
      }

      // check if password matches the save bcrypt password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (!isMatch) {
          
          // return error
          return res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
          })
        }

        // generate a token
        const token = jwt.sign(user, app.get('API_SECRET'), {
          expiresIn: 1440 // expires in 24 hours
        })

        // return the information including token as JSON
        return res.json({
          success: true,
          message: 'enjoy your token!',
          token,
        })

      })

    })
  })

// route middleware to verify a token
router.use((req, res, next) => {

  //check header or url parameters or post parameters for token
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  // check if a token was provided
  if (!token) {

    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }

  // verifies secret and checks exp
  jwt.verify(token, app.get('API_SECRET'), (err, decoded) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Failed to authenticate',
      })
    }

    // save to request for use in other routes
    req.decoded = decoded
    next()

  })


})

// on routes that end in /minions
// -----------------------------------------------------------------------------
router.route('/minions')

  // get all minions (accessed at GET http://localhost:8081/api/minions)
  .get((req, res) => {

    // get all minions from database
    Minion.find({}, (err, minions) => {
      if (err) {
        return res.send(err)
      }

      // minions
      const data = minions

      // send minions back to client
      return res.send(data)

    })
  })

  // create a minions (accessed at POST http://localhost:8081/api/minions)
  .post((req, res) => {
    const {
      body: {
        minion: {
          brand,
          description,
          name,
        },
      },
    } = req

    // create a new instance of the Minion model
    const minion = new Minion({
      brand,
      dateCreated: new Date(),
      description,
      name,
    })

    // save the minion and check for errors
    minion.save((err, minion) => {
      if (err) {
        return res.send(err)
      }

      return res.send(minion)
    })
  })

// REGISTER OUR ROUTES ---------------------------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

console.log('Magic happens on port ' + app.get('port'))
