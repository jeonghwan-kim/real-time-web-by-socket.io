'use strict';

angular.module('realTimeWebBySocketioApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
      $scope.awesomeThings = [];

      $http.get('/api/things').success(function (awesomeThings) {
        $scope.awesomeThings = awesomeThings;
      });

      socket.on('thing:create', function (newThing) {
        $scope.awesomeThings.push(newThing);
      });

      socket.on('thing:destroy', function (removedName) {
        _.remove($scope.awesomeThings, function (thing) {
          return thing.name === removedName;
        });
      });

      $scope.destroy = function (thing) {
        $http.delete('/api/things/' + thing.name);
      };

      $scope.create = function (name) {
        var thing = {name: name, info: ''};
        $http.post('/api/things', thing);
        $scope.name = '';
      };

    });
