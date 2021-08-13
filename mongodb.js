const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose"); // require mongoose
const Blog = require("./models/blog");
const { result } = require('lodash');

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



//routes
app.get("/", (req, res) => {
    res.redirect("/blogs"); //it still takes us to the blogs display but we're jst using redirect
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) //we get all the blogs in doc colletion and sort -1 puts them in the latest order
        .then(result => { // once we've gotten the collection, we hv to pass it to our index view
            res.render('index', { blogs: result, title: 'All blogs' }); // we pass in the title and the blogs array
        })
        .catch(err => {
            console.log(err);
        });
}); //page dat displays all d blogs


app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new Blog" });
});

//404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});