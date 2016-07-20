var Wod = require('./wod');
var assert = require('assert');

class Girl extends Wod {
  constructor(name, workout){
    super(name, workout);
  }

  static findAll(fn) {
    let girls = global.db.crossfit.collection('girls');
    girls.find().sort({name: 1}).toArray(function(err, docs) {
      if (err) { console.log(err) }
      else {
        fn(docs);
      }
    });
  }

  static findOne(name, fn) {
    let girls = global.db.crossfit.collection('girls');
    girls.findOne({name: name}, (err, doc) => {
      if (err) { console.log(err) }
      else {
        fn(doc);
      }
    });
  }
}

module.exports = Girl;
