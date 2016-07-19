var express = require('express');

exports.login = function(req, res) {
  console.log(req.params)
  res.render('index', { title: 'Express' });
};
