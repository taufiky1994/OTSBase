//MODEL: exampleModel

exports.try = function(decodedToken, params, cb) {
  var resJson = {
  	status: 'ok',
  	description: 'example model'
  };

  cb(null, resJson);
};