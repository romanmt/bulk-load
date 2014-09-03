/**
 * Module dependencies
 */
var path = require('path')
  , fs = require('fs')

exports.globalize = function(pathName) {
  fs.readdirSync(pathName).map(function(file) {
    var model = path.basename(file, '.js')
    if(path.extname(file) !== '') {
      global[_(model).classify()] = require(
        pathName + '/' + model)
    }
  })
}

exports.load = function(pathName) {
  fs.readdirSync(pathName).map(function(file) {
    var helper = path.basename(file, '.js')
    if (path.extname(file) !== '') {
      require(pathName + '/' + helper)
    }
  })
}
