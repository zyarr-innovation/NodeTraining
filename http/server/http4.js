var fs = require('fs');

var server = require('http').createServer(function (req, res) {
    var rs = fs.createReadStream('./log.js');
    rs.on('data', function (data) {
        if (!res.write(data)) {
            rs.pause();
        }
    });

    res.on('drain', function () {
        rs.resume();
    });

    rs.on('end', function () {
        res.end();
    });
});

server.listen(4000);