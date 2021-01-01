var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('test.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('test4.txt'));

console.log("File Decompressed.");

