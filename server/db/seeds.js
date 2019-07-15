require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const {
  User,
  Project
} = require('./schema')

var proposal = new Project({
  projectTitle: 'Proposed Title',
  projectDescription: 'Description',
  projectObjective: 'New Objectives',
  projectTimeline: 'Set Up A Timeline'
})
var sean = new User({
  name: 'Sean Connery',
  username: 'theReal007',
  email_address: 'sc@thismail.com',
  project: [proposal]

})

User.remove({})
  .then(() => sean.save())
  .then(() => console.log('Successful Save'))
  .then(() => {
    // <--- close the database --->
    mongoose.connection.close()
  })
  console.log('seeded')