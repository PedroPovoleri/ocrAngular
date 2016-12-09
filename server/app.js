var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fileUpload = require('express-fileupload');


var app = express();

//router load
var home = require('./route/homeRoute');
//Morgan
app.use(morgan('dev'));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//Mongoose connection

// Configura as rotas
var router = express.Router();

//Static routers
app.use('/' , express.static(path.resolve('./public')));

app.use(fileUpload());

//Model routers
app.use('/api/home', home);

app.listen(9191);