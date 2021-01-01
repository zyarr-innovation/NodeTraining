const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function caller() {
    try {
        const content = await readFile('./test.txt', 'utf-8');
        console.log(content);
    } catch (err) {
        console.error(err);
    }
}

caller()