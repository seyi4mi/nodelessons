const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose"); // require mongoose
const Blog = require("./models/blog");

//express apps
const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://Seyifunmi:Keresimesi@nodetuts.ba9pj.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs")

//middleware & static files (css,img etc)
app.use(express.static('public'));
app.use(morgan("dev"));

// mongoose & mongo tests
app.get("/add-blog", (req, res) => { //.get will respont to the url request
    const blog = new Blog({ //we create a new instance if blog document, then save it to d blog collectio in the db
        title: "new blog", //passing object with their propeties
        snippet: "about my new blog",
        body: "more about my new blog"
    })

    blog.save() //we save the ne instance of the blog document
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

//Retrieving blogs from the collection
app.get('/all-blogs', (req, res) => {
    Blog.find() //gets us  all the doccs in d blogs collection
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

//finding a single blog
app.get('/single-blog', (req, res) => {
    Blog.findById('61117f627228bc42447cfaca')
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

//routes
app.get("/", (req, res) => {
    const blogs = [
        { title: 'Esther wins the Voice', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Kpee has a good heart', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Naomi still remains the queen', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new Blog" });
});

//404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});