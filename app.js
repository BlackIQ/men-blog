const express = require('express');

// Express App
const app = express();

app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Hello', body: 'Hey man!'},
        {title: 'Hello', body: 'Hey man!'},
        {title: 'Hello', body: 'Hey man!'}
    ];

    res.render('index', {
        title: 'Home',
        blogs: blogs
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create'
    });
});

app.get('/panel', (req, res) => {
    res.redirect('/');
});

app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
})