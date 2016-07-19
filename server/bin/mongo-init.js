var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://localhost:27017/crossfit';

exports.start = function() {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to Mongo server");
    global.db = {};
    global.db.crossfit = db;
  });
};
