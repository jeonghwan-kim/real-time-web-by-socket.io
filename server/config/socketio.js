'use strict';

module.exports = function (socketio) {
  socketio.on('connection', function (socket) {
    console.log('onConnection')
    require('../api/thing/thing.socket').register(socket);
  });
};