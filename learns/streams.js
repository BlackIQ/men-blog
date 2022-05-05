const fs = require('fs');

const readStream = fs.createReadStream('./learns/docs/blog3.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('----- New -----');
    console.log(chunk);
});