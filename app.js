const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Modules
const Blog = require('./modules/blog');

// Express App
const app = express();

const dbURI = "mongodb+srv://ninja:test1234@menblogs.ji4jf.mongodb.net/menblogs?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected!');
        app.listen(3000);
    })
    .catch((error) => console.log(error));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('blogs', {
                title: 'Blogs',
                blogs: result
            });
        })
        .catch((error) => {
            res.send(error);
        });
});

app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then((result) => {
            res.render('blog', {
                title: result.title,
                blog: result
            })
        })
        .catch((error) => {
            res.send(error);
        });
})

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