var express = require('express');
// var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var indexRouter = require('./routes/index');
// relative paths
const bodyParser = require('body-parser');

var usersRouter = require('./routes/users');
var skillsRouter = require('./routes/skills');
// const corsOptions = {
//     origin: 'http://localhost:3000', // or an array of allowed origins
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // enable cookies from the client-side
//     optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   };

require('dotenv').config();
require('./config/database');

var app = express();
// app.use(cors(corsOptions));
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/skills', skillsRouter);
// 


  

module.exports = app;
