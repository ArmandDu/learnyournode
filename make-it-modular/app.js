var ls = require('./ls');

ls(process.argv[2], process.argv[3], function(err, data) {
    if (err) console.log(err);

    for (var i = 0, len = data.length; i < len; i++) {
	console.log(data[i]);
    }
});
