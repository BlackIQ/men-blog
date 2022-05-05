const fs = require('fs');

// Read File
fs.readFile('./learns/docs/blog1.txt', (error, data) => {
    if (error) console.log(error);
    else console.log(data.toString());
});

// Write File

// Delete File

// Directories