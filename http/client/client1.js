var https = require('https');

var options = {
    host: 'www.google.com',
    port: 443,
    path: '/index.html'
};

https.get(options, function (res) {
    console.log('got response: ' + res.statusCode);
}).on('error', function (err) {
    console.log('got error: ' + err.message)
});