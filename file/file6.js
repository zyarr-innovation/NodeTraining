var fs = require("fs");
var buf = new Buffer(1024);

fs.open('test.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }

    // Truncate the opened file.
    fs.ftruncate(fd, 10, function (err) {
        if (err) {
            console.log(err);
        }

        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                console.log(err);
            }

            // Print only read bytes to avoid junk.
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            // Close the opened file.
            fs.close(fd, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
    });
});