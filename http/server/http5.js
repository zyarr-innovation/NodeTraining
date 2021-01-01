var fs = require('fs');

require('http').createServer(function (req, res) {
    var rs = fs.createReadStream('./log.js');
    rs.pipe(res, {
        end: false
    });

    rs.on('end', function () {
        res.end("And that's all folks!");
    })

}).listen(4000);