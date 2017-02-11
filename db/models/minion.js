import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MinionSchema = new Schema({
  brand: String,
  dateCreated: Date,
  description: String,
  name: String,
})

export default mongoose.model('Minion', MinionSchema)
