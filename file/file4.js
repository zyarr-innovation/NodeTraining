var fs = require('fs');
var util = require('util')

myWriteFile = util.promisify(fs.writeFile)
myReadFile = util.promisify(fs.readFile)

myWriteFile('test2.txt', 'Hello promise chaining!')
    .then(console.log("write completed"))
    .then(() => myReadFile('test2.txt', "utf-8"))
    .then(data => console.log("Data => ", data))
    .catch(err => console.log("Error => ", err))

// async function caller(fileName, dataToWrite) {
//     await myWriteFile(fileName, dataToWrite)
//     console.log("write completed")
//     dataToLog = await myReadFile(fileName, "utf-8")
//     console.log(dataToLog)
// }

// caller("test3.txt", "Hello Galaxy")