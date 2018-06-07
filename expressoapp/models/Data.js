'use strict';

var Datastore = require('nedb'),

  dataDb = new Datastore({
    filename: __dirname + '/../db/data.db',
    autoload: true
  });

module.exports = dataDb;