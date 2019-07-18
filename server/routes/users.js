var express = require('express');
const {
  User
} = require('../db/schema')
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  User.find({})
  .then(users => {
    res.json(users)
  })
  .catch((err) => console.log(err))
})
// SHOW Route
router.get('/user/:id', (req, res) => {
    User.findById(req.params.id)
.then((user) => {
  res.json('user/show',{
      user: user
  })
  console.log(individualUser)
})
})
// CREATE Route
router.post('/', (req, res) => {
  const newUser = new User(req.body)
  newUser.save()
  .then((user) => {
    res.json(user)
  })
})



// UPDATE Route
router.put('/user/:id/edit', async (req, res) => {
  console.log(req.params)
  const userId = req.params.id
  const updatedUserId = req.body
  const saveUser = await User.findByIdAndUpdate(userId, updatedUserId, {
    new: true
  })
  res.send({
    saveUser
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  const savedUserId = req.params.id
  console.log(savedUserId.name + " is deleted")
  User.findByIdAndRemove(savedUserId).then(() => {
      res.send({
        msg: 'poof'
      })
    })
    .catch((err) => {
      console.log(err)
    })
  })

  
  module.exports = router;