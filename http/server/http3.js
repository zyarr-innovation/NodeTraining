var http = require('http');

var util = require('util');

var server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'max-age=3600'
    });

    res.write('Hello World!');
    res.write(util.inspect(req.headers));
    res.end();
});

server.listen(4000);