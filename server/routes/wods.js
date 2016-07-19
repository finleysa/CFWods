var express = require('express');
var Amrap = require('../models/amrap');
var Girl = require('../models/girl');

exports.SelectWod = (req, res) => {
  console.log(req.params)
};

exports.findAll = (req, res) => {
  Girl.findAll((docs) =>
  {
    console.log(docs);
    res.json(docs);
  });
}

exports.insert = (req, res) => {
  res.send('testing');
}
