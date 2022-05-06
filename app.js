const express = require('express');

// Express App
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('Hello Home!');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('Hello About!');
    res.sendFile('./views/about.html', {root: __dirname});
});