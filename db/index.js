// database dep
import mongoose from 'mongoose'

// import config
import {
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_URL,
  DB_USER,
} from '../config'

// connect to the db
const connect = () => {
  // correct mongoose mpromise deprecation warning
  mongoose.Promise = global.Promise
  
  // connect to our db
  mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}.mlab.com:${DB_PORT}/${DB_NAME}`)
}

const db = {
  connect,
}

export default db