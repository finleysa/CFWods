var express = require('express');
var Amrap = require('../models/amrap');
var Girl = require('../models/girl');

exports.SelectWod = (req, res) => {
  console.log(req.params)
};

exports.findAll = (req, res) => {
  Girl.findAll((docs) =>
  {
    res.json(docs);
  });
}

exports.findOne = (req, res) => {
  Girl.findOne(req.params.wod, (doc) =>
  {
      res.json(doc);
  });
}
