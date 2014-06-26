var fs = require('fs');
var express = require('express');
var app = express();
var walkRoutes = require('../util/walk-routes');

var index = (function (_statics, _rootdir) {
  var statics = './' + _statics.match(/[^/.]+/)[0];
  var rootdir = './' + _rootdir.match(/[^/.]+/)[0];

  app.use(express.static(statics));

  var routes = walkRoutes(rootdir, /\.json$/);

  var routeHandler = function(filePath) {
    return function(req, res) {
      res.type('application/json');
      console.log('Serving: ', filePath);
      res.send(fs.readFileSync(filePath));
    };
  };

  var start = '.'.length;
  var cutoff = '/index.json'.length;

  for (var i = 0; i < routes.length; i++) {
    var filePath = routes[i];
    var last = filePath.length - cutoff - start;
    var route = filePath.substr(start, last);
    console.log('route: ', route);
    app.get(route, routeHandler(filePath));
  }

  app.listen(3000);

  console.log('we listenin 4 u @ 3000');
});

module.exports = index;
