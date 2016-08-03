'use strict';

// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();


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
  'auto update': true,
  'cookie secret': cookieSecret
});
 
// Let keystone know where your models are defined. Here we have it at the `/models`
keystone.import('models');

// Serve your static assets
app.use(serve('./assets'));


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

console.log('Finished executing mongoose code')


/*
 * Config for Production and Development
 */
if (process.env.NODE_ENV === 'production') {
    // Set the default layout and locate layouts and partials
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: 'dist/views/layouts/',
        partialsDir: 'dist/views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/dist/views');
    
    // Locate the assets
    app.use(express.static(__dirname + '/dist/assets'));

} else {
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
}

// Set Handlebars
app.set('view engine', 'handlebars');



/*
 * Routes
 */
// Index Page
//app.get('/', function(request, response, next) {
//    response.render('index');
//});



// This is where your normal routes and files are handled
app.get('/', function(req, res, next) {
  res.send('hello world');
});
keystone.app = app;
//keystone.start();


/*
 * Start it up
 */
//app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);