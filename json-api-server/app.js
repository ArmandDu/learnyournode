var http = require('http');
var url = require('url');

var routes = {
    '/api/parsetime': function (query) {
	var d = new Date(query.iso);
	return {
	    hour: d.getHours(),
	    minute: d.getMinutes(),
	    second: d.getSeconds()
	};
    },
    '/api/unixtime': function(query) {
	return {
	    unixtime: new Date(query.iso).getTime()
	};
    }
}

var server = http.createServer(function(req, res) {
    var u = url.parse(req.url, true);
    if (u.pathname in routes) {
	res.writeHead(200, { 'Content-Type': 'application/json' }) 
	res.end(JSON.stringify(routes[u.pathname](u.query)));
    }
    else {
	res.writeHead(404);
	res.end();
    }
});

server.listen(process.argv[2]);
