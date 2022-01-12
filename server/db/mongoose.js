var mongoose = require ('mongoose');
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());
var expressSession = require('express-session');
app.use(expressSession({secret:'jjj', saveUninitialized: false, resave: false}));



mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://admin:123@hms.qjyvl.mongodb.net/hms");
module.exports = {mongoose};
