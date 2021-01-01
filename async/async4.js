const fs = require('fs');

//const readFile = util.promisify(fs.readFile);
readFile = function (fileName, fileFormat) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, fileFormat, (err, data) => {
            if (err) {
                console.log('promise rejection')
                reject(err)
            } else {
                console.log('promise resolve')
                resolve(data)
            }
        });
    })
}

// readFile('./test.txt', 'utf-8')
//     .then(data => console.log("Data =>", data))
//     .catch(err => console.log("Error =>", err))

async function caller() {
    try {
        const content = await readFile('./test.txt', 'utf-8');
        console.log(content);
    } catch (err) {
        console.error(err);
    }
}

caller()