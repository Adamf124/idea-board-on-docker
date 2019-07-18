var express = require('express');
const {
  User,
  Project
} = require('../db/schema.js')
var router = express.Router();

router.get('/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    console.log(user)
    user.projects = user.projects.reverse()
    res.json(user)
  }).catch(console.log)
})

router.post('/:id', (req, res) => {
  User.findById(req.params.id)
  .then((user) => {
    console.log(req.params.id)
    console.log(user)
    const newProject = new Project({})
    user.projects.push(newProject)
    user.save()
    .then((user) => {
      res.json(newProject)
    })
  }).catch(console.log)
})

module.exports = router