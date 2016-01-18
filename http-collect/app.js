var http = require('http');

function answer(data) {
    console.log(data.length);
    console.log(data);
}

http.get(process.argv[2], function(res) {
    res.setEncoding('utf8');
    var str = "";
    res.on('data', function(chunk) {str += chunk;})
	.on('error', console.error)
	.on('end', function() {answer(str)});
}).on('error', console.error);
