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
import morgan from 'morgan'

// database dep
import db from './db'

// import db models
import User from './db/models/user'

// import routes
import routes from './routes'

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
  log,
  SALT_ROUNDS,
} from './config'

// initialize the log
const accessLogStream = log.init

// connect to our db
db.connect()

// initialize express
var app = express()

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
app.get('/', routes.client);

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
router.get('/', routes.api.root)


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
  

// serve the /setup route
// initializes the api
router.route('/setup')
  .get(routes.config.setup)

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
  .get(routes.minions.getMinions)

  // create a minion (accessed at POST http://localhost:8081/api/minions)
  .post(routes.minions.createMinion)

// REGISTER OUR ROUTES ---------------------------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(app.get('port'), () => {
  console.log(`Find the client at: http://localhost:${app.get('port')}/`);
  console.log(`Find the api at: http://localhost:${app.get('port')}/api/`);
});
