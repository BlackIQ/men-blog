const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Modules
const Blog = require('./modules/blog');

// Express App
const app = express();

const dbURI = "mongodb+srv://ninja:test1234@menblogs.ji4jf.mongodb.net/blogs?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected!');
        app.listen(3000);
    })
    .catch((error) => console.log(error));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'Title',
        snippet: 'First',
        body: 'Hello Gangs!'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        });
});

app.get('/get-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        });
});

app.get('/get-single', (req, res) => {
    Blog.findById('6274fa45375c1673d3560d53')
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        })
});

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