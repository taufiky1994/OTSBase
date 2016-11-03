//CONTROLLER: example

//Requires Modules
var express = require('express');
var router = express.Router();

//Models
var exampleModel = require('../../models/exampleModel');

//Async Functions
var utils = require('../../functions/utils');

router.get('/try', function(req, res) {
  exampleModel.tryProtected(utils.decodeAuthorizationHeader(req.headers.authorization), req.body, function(err, resModel) {
    if (err) res.send(err);
    else res.send(resModel);
  });
});

module.exports = router;