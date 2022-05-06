const express = require('express');

// Express App
const app = express();

app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/panel', (req, res) => {
    res.redirect('/');
});

app.use((req, res) => {
    res.status(404).render('404');
})