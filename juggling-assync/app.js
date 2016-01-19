var http = require('http');

var results = [];

function call(i) {
    
    http.get(process.argv[2 + i], function(res) {
	res.setEncoding('utf8');
	var str = "";
	res.on('data', function(c) {str+=c;})
	    .on('error', console.error)
	    .on('end', function() {
		results[i] = (str);
		if (results.length === 3) {
		    for(var j = 0; j < 3; j++) {
			console.log(results[j]);
		    }
		}
	    });
    });
};

for (var i = 0;  i < 3; i++) {
    call(i);
}
