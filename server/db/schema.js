require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  title: {
    type: String,
    default: 'New Idea'
  },
  description: {
    type: String,
    default: 'Describe it!'
  }
})

const UserSchema = new Schema({
  name: String,
  userName: String,
  email_address: String,
  projects:[ProjectSchema]

})

const User = mongoose.model('User', UserSchema)
const Project = mongoose.model('Project', ProjectSchema)

module.exports = {
  User,
  Project
}


console.log('Your schema has been read')