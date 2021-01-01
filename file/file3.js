var fs = require('fs');

fs.writeFile('test2.txt', 'Hello Universe!',
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Write operation complete.');

            fs.readFile('test2.txt', "utf-8", (err, data) => {
                if (err) {
                    console.log("there is some problem with file: ", err);
                } else {
                    console.log(data);
                }
           })
        }
    }
);