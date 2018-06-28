const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  projectTitle: {
    type: String,
    default: 'New Title'
  },
  projectDescription: {
    type: String,
    default: 'New Description'
  },
 projectObjective: {
   type: String,
   default: 'New Objectives'
  },
  projectTimeline: {
    type: String, 
    default: 'Set Up A Timeline'
  }
})

const UserSchema = new Schema({
  name: String,
  username: String,
  email_address: String,
  project:[ProjectSchema]

})

const UserModel = mongoose.model('User', UserSchema)
const ProjectModel = mongoose.model('Project', ProjectSchema)
module.exports = {
  UserModel,
  ProjectModel
}