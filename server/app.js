// import files and packages up here
var express = require('express');
var morgan = require('morgan')
var path = require('path');
var jsonData = require('/Users/kyle/oca/startnow-node101-express-server/server/data.json'); 

// create your express server below

var app = express();
app.use(morgan('dev'));

// add your routes and middleware below

app.use(express.static(__dirname + '/../../startnow-web101-san-diego-top-spots'));

app.get('/data', function(request, response)
{
    response.send(jsonData)
});

// finally export the express application
module.exports = app;
