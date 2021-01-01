var fs = require("fs");
var data = 'Hello Universe Galaxy';

var writerStream = fs.createWriteStream('test2.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', function () {
    console.log("Write completed.");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program Ended");