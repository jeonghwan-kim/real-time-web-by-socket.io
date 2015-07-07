'use strict';

var db = require('./db');

exports.register = function(socket) {
  db.on('create', function (newThing) {
    socket.emit('thing:create', newThing);
  });

  db.on('destroy', function (removedName) {
    socket.emit('thing:destroy', removedName);
  });
};

