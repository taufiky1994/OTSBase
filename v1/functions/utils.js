//FUNCTION: utils

//Requires Modules
var decoder = require('jwt-decode');

//Export the decoded of Authorization Header
exports.decodeAuthorizationHeader = function(bearerToken) {
  try {
    var array = bearerToken.toString().split(" ");
    return decoder(array[1]);
  }
  catch (err) {
  	return null;
  }
}