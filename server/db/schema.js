require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  title: {
    type: String,
    default: 'New Title'
  },
  description: {
    type: String,
    default: 'New Description'
  }
})

const UserSchema = new Schema({
  name: String,
  username: String,
  email_address: String,
  project:[ProjectSchema]

})

const User = mongoose.model('User', UserSchema)
const Project = mongoose.model('Project', ProjectSchema)

module.exports = {
  User,
  Project
}


console.log('Your schema has been read')