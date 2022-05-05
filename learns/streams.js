const fs = require('fs');

const readStream = fs.createReadStream('./learns/docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./learns/docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- New -----');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });

// Piping
readStream.pipe(writeStream);