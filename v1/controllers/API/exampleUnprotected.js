//CONTROLLER: example

//Requires Modules
var express = require('express');
var router = express.Router();

//Models
var exampleModel = require('../../models/exampleModel');

router.get('/try', function(req, res) {
  exampleModel.tryUnprotected(req.body, function(err, resModel) {
    if (err) res.send(err);
    else res.send(resModel);
  });
});

module.exports = router;