//CONTROLLER: index

//Requires Modules
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

//JWT Check Middleware
var jwtCheck = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID
});

router.use('/exampleUnprotected', require('./API/exampleUnprotected'));
router.use('/exampleProtected', jwtCheck, require('./API/exampleProtected'));

module.exports = router;