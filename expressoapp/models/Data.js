'use strict';
var Datastore = require('nedb'),
path = require('path'),
  dataDb = new Datastore({
    filename: './db/data.db',
    autoload: true
  });
module.exports = dataDb;