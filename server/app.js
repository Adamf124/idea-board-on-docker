require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
})

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('===============================')
    console.log('MONGOOSE CONNECTION ESTABLISHED');
    console.log('===============================')
});
connection.on('error', (err) => {
    console.log('!!!!!!! ALERT !!!!!!!')
    console.log('A wild Mongoose error has appeared... ' + err);
  }) 

port = process.env.PORT || 4000;


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects')

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'))
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/:id', projectsRouter)
app.listen(port);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})
console.log("You're all set Space Cowboy...Server is running on port " + port + '.')

module.exports = app;