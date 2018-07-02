var express = require('express');
const { UserModel } = require('../db/schema')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.find().then((users) => {
    res.json({
      users
    })
  });
});
// SHOW Route
router.get('/:id', (req, res) => {
  UserModel.findById(req.params.id)
    .then((individualUser) => {
      res.json( individualUser )
      console.log(individualUser)
    })
})
// CREATE Route
router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.json(user)
  })
})



// UPDATE Route
router.put('/:id', async (req, res) => {
  console.log(req.params)
  const userId= req.params.id
  const updatedUserId = req.body
  const saveUser = await UserModel.findByIdAndUpdate(userId, updatedUserId, {new:true})
  res.send({
    saveUser
  })
})

// DELETE Route
router.delete('/:id', (req,res)=>{
  const savedUserId = req.params.id
  console.log(savedUserId.name + " is deleted")
  UserModel.findByIdAndRemove(savedUserId).then(()=>{
  res.send({msg: 'poof'})
  })
  .catch((err)=>{
  console.log(err)
  })
  })
module.exports = router;
