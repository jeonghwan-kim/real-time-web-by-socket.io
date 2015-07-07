/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var db = require('./db');

// Get list of things
exports.index = function(req, res) {
  res.json(db.findAll());
};

// Create new thing
exports.create = function(req, res) {
  var newThing = {name: req.body.name, info: req.body.info};
  db.create(newThing);
  res.json(201, newThing);
};

// Remove a thing
exports.destroy = function(req, res) {
  var name = db.destroy(req.params.name);
  res.json(name);
};
