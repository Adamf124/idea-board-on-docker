require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const { UserModel, ProjectModel } = require('./schema')

const proposal = new ProjectModel({
    projectTitle: 'Proposed Title',
    projectDescription: 'Description',
    projectObjective: 'New Objectives',
    projectTimeline: 'Set Up A Timeline'
  })
const user1 = new UserModel({
    name: 'Sean Connery',
    username: 'theReal007',
    email_address: 'sc@thismail.com',
    project:[proposal]

  })

UserModel.remove({})
.then(() => user1.save())
.then(() => console.log('Successful Save'))
.then(() => {
    // <--- close the database --->
    mongoose.connection.close()
})