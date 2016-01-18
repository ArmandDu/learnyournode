var fs = require('fs');
var _path = require('path');

function filtered_ls(path, ext, cb) {

    fs.readdir(path, function(err, list) {
	if (err) return cb(err);

	var res = list.filter(function (f) {
	    return (_path.extname(f) === '.' + ext);
	});
	cb(null, res);
    });
}

module.exports = filtered_ls;
