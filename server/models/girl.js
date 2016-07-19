var Wod = require('./wod');
var assert = require('assert');

class Girl extends Wod {
  constructor(name, workout){
    super(name, workout);
  }

  static findAll(fn) {
    let girls = global.db.crossfit.collection('girls');
    girls.find().toArray(function(err, docs) {
      if (err) { console.log(err) }
      else {
        console.log(docs);
        fn(docs);
      }
    });
  }
}

module.exports = Girl;
