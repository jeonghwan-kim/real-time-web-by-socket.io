'use strict';

var _ = require('lodash');
var util = require('util');
var events = require('events').EventEmitter;

function MyDatabase() {
  events.call(this);

  this.db = [
    {
      name : 'Development Tools',
      info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
      name : 'Server and Client integration',
      info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
      name : 'Smart Build System',
      info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    },  {
      name : 'Modular Structure',
      info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
    },  {
      name : 'Optimized Build',
      info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    },{
      name : 'Deployment Ready',
      info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    }
  ];
}

util.inherits(MyDatabase, events);

MyDatabase.prototype.findAll = function () {
  return this.db;
};

MyDatabase.prototype.create = function (newThing) {
  this.db.push(newThing);
  this.emit('create', newThing);
  return newThing;
};

MyDatabase.prototype.destroy = function (name) {
  _.remove(this.db, function (thing) {
    return thing.name === name;
  });
  this.emit('destroy', name);
  return name;
};

var db = new MyDatabase();
exports = module.exports = db;