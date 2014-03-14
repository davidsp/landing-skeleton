(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("app", function(exports, require, module) {
var App = (function() {
    $(function() {
        var section = require("scripts/index");
    });
})();

});

;require.register("scripts/index", function(exports, require, module) {
var tpl = require("templates/index");

var IndexPage = (function() {
    $('#content').html(tpl({}));
})();

module.exports = IndexPage;
});

;require.register("templates/index", function(exports, require, module) {
module.exports = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="container-fluid">\r\n    <h1>Brunch landing</h1>\r\n    <h2>this is the index template</h2>\r\n    <div class="row">\r\n        <div class="col-lg-10">\r\n            <p>Landing skeleton is a really basic skeleton, ready to quickstart the development of landing pages and basic applications.</p>\r\n            <h3>Styling options</h3>\r\n            <p> It includes by default:</p>\r\n            <ul>\r\n                <li>Bootstrap. </li>\r\n                <li>Some sample less mixins compiled from different sources.</li>\r\n            </ul>\r\n            <h3>Scripting</h3>\r\n            <p>Libraries included:</p>\r\n            <ul>\r\n                <li>Require.js (comes together with brunch)</li>\r\n                <li>Jquery</li>\r\n                <li>Underscore</li>\r\n                <li>Bootstrap components</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>';
}
return __p;
};
});

;