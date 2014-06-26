var assert = require("assert");
var walkRoutes = require('../lib/util/walk-routes');

describe('Walk Routes', function () {
  describe('walkRoutes', function () {
    describe("Should walk normally", function () {
      var routes = walkRoutes('./test', /\.js$/);
      assert.equal(1, routes.length);
      assert.equal(routes[0], './test/index.js');
    });
  });
});
