var fs = require('fs');

module.exports = function walkRoutes(primary, selector) {
  this.primary = primary;
  this.selector = selector;

  return (function walkThrough(readdir, relative) {
    var paths = [];
    for (var i = 0; i < readdir.length; i++) {
      var entry = readdir[i];
      if (selector.test(entry)) {
        paths.push(relative + '/' + entry);
      } else {
        var innerRelative = relative + '/' + entry;
        var innerReaddir = fs.readdirSync(innerRelative);
        paths = paths.concat(walkThrough(innerReaddir, innerRelative));
      }
    }
    return paths;
  })(fs.readdirSync(primary), primary);
};
