var express = require('express');
const { UserModel } = require('../db/schema')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.find().then((users) => {
    res.send({
      users
    })
  });
});

router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.send(user)
  })
})
module.exports = router;
