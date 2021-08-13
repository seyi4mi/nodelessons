//Request types
//1. GET request to req dta frm d sever
//2. POST request to create new data in our db
//3. DELETE request to delete data
//4. PUT request to update data

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://Seyifunmi:Keresimesi@nodetuts.ba9pj.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) //takes all d url encoded data then passes it as an obj we can use on d req obj
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

//creating a post handler
app.post('/blogs', (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);

    blog.save() //save in the database
        .then(result => {
            res.redirect('/blogs'); // redirects user after to home page after submitting
        })
        .catch(err => {
            console.log(err);
        });
});
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id; //to find the single doc id in a database
    Blog.findById(id) //then retive the doc with the id in d database
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
            // after we got d blog we send in the details view, then give the blog property the result and title
        })
        .catch(err => {
            console.log(err);
        });
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});