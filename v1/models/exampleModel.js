//MODEL: exampleModel

exports.tryProtected = function(decodedToken, params, cb) {
  var resJson = {
  	status: 'ok',
  	description: 'example model'
  };

  cb(null, resJson);
};

exports.tryUnprotected = function(params, cb) {
  var resJson = {
  	status: 'ok',
  	description: 'example model'
  };

  cb(null, resJson);
};