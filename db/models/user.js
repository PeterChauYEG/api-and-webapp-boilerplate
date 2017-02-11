import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  dateCreated: Date,
  name: String,
  password: String,
  admin: Boolean,
})

export default mongoose.model('User', UserSchema)
