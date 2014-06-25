var fs = require('fs');
var express = require('express');
var app = express();
var walkRoutes = require('./lib/walk-routes');

var rootdir = './routes';
var statics = '/dist';

app.use(express.static(__dirname + statics));

var routes = walkRoutes(rootdir, /\.json$/);

var routeHandler = function(filePath) {
  return function(req, res) {
    res.type('application/json');
    console.log('Serving: ', filePath);
    res.send(fs.readFileSync(filePath));
  };
};

var index = '.'.length;
var cutoff = '/index.json'.length;

for (var i = 0; i < routes.length; i++) {
  var filePath = routes[i];
  var last = filePath.length - cutoff - index;
  var route = filePath.substr(index, last);
  console.log('route: ', route);
  app.get(route, routeHandler(filePath));
}

app.listen(3000);

console.log('we listenin 4 u @ 3000');
