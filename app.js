'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var app = express();
var port = 3000;

var keystone = require('keystone'),
    serve = require('serve-static'),
    favicon = require('serve-favicon'),
    body = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer');

var cookieSecret = 'secretCookie';

/*
 * Use Handlebars for templating
 */
var exphbs = require('express3-handlebars');
var hbs;

// For gzip compression
app.use(express.compress());

app.use(cookieParser(cookieSecret));
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(multer());

keystone.init({
  'name': 'keystone4',
  'brand': 'keystone4',
  'session': false,
  'updates': 'updates',
  'auth': true,
  'user model': 'User',
  'auto update': false,
  'cookie secret': cookieSecret
});
 
// Let keystone know where your models are defined. Here we have it at the `/models`
keystone.import('models');

// Serve your static assets
app.use(serve('./assets'));


app.engine('handlebars', exphbs({
    // Default Layout and locate layouts and partials
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/'
}));

// Locate the views
app.set('views', __dirname + '/views');

// Locate the assets
app.use(express.static(__dirname + '/assets'));


// Set Handlebars
app.set('view engine', 'handlebars');



keystone.set('mongo', 'mongodb://localhost:27017/keystone4');


// This is where your normal routes and files are handled
app.get('/', function(req, res, next) {
  res.send('hello world');
});
keystone.app = app;
keystone.start();
