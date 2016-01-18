var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2], function(err, content) {
    for (var i = 0, len = content.length; i < len; i++) {
	if (path.extname(content[i]) === '.' + process.argv[3])
	    console.log(content[i]);
    }
});
