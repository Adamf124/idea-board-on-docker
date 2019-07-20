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
    const newProject = new Project({})
    user.projects.push(newProject)
    console.log('New Project Created')
    user.save()
    .then((user) => {
      res.json(newProject)
    })
  }).catch(console.log)
})

router.delete('/:id', (req, res) => {
  const savedProjectId = req.params.id
  console.log(savedProjectId.title + " is deleted")
  // User.findByIdAndRemove(savedProjectId).then(() => {
  //     res.send({
  //       msg: 'poof'
  //     })
  //   })
    .catch((err) => {
      console.log(err)
    })
  })

module.exports = router