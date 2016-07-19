var Wod = require('./wod');
var assert = require('assert');

class Amrap extends Wod {
  constructor(name, workout, reps){
    super(name, workout);
    this.reps = reps;
  }

  static findAll(fn) {
    let wods = global.db.crossfit.collection('girls');
    wods.find().toArray(function(err, docs) {
      assert.equal(null, err);
      fn(docs);
    });
  }
}

module.exports = Amrap;
