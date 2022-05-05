const fs = require('fs');

// Read File
fs.readFile('./learns/docs/blog1.txt', (error, data) => {
    if (error) console.log(error);
    else console.log(data.toString());
});

// Write File
fs.writeFile('./learns/docs/blog1.txt', 'hello!', (error) => {
    if (error) console.log(error);
    else console.log('Done!');
});

fs.writeFile('./learns/docs/blog2.txt', 'hello!', (error) => {
    if (error) console.log(error);
    else console.log('Done!');
});

// Delete File

// Directories
fs.mkdir('./assets', (error) => {
    if (error) console.log(error);
    else console.log('Created!');
});