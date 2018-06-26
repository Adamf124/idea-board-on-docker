require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

mongoose.connect(process.env.MONGODB_URI); 

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('===============================')
    console.log('MONGOOSE CONNECTION ESTABLISHED'); 
    console.log('===============================')   
}); 
connection.on('error', (err) => {
    console.log('!!!!!!!! ALERT !!!!!!!!!!')
    console.log('Mongoose default connection error: ' + err);
}); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/build/'))
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
module.exports = app;
