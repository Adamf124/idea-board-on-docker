require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const db = mongoose.connection;

const {
  User,
  Project
} = require('./schema')


var project1 = new Project({  title: 'Proposed Title', description: 'Description'})
var project2 = new Project({  title: 'Proposed Title2', description: 'Description2'})
var project3 = new Project({  title: 'Proposed Title3', description: 'Description3'})
const projects = [project1,project2,project3]

var sean = new User({
  name: 'Sean Connery',
  username: 'theReal007',
  email_address: 'sc@thismail.com',
  projects: [projects]

})

var adam = new User({
  name: 'Adam Ferguson',
  username: 'VLPHV',
  email_address: 'af@thismail.com',
  projects: [projects]

})

const users = [sean, adam]

users.forEach((user) => {
  user.save()
      .then((user) => {
          console.log(`${user.name} saved!`)
      })
      .catch((error) => {
          console.log(error)
      })
});

// Disconnect from database
db.close();
console.log('seeded')