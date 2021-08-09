//MIDDLEWARE is any code that runs (on the server) between getting a request nd sending a response
//e.g the app.use(func), app.get("/", func)
//other examples  -logger middleware to log details of evry request
//-authentication check middleware for protected routes
//Middleware to parse JSON data from requests

const express = require("express");

//express apps
const app = express();

//register view engine
app.set("view engine", "ejs")

//listen 4 requests
app.listen(3000);

//Creating Middleleware
app.use((req, res, next) => { //add next to the parameter so we can have access to it's function
    console.log('new request made:');
    console.log('host: ', req.hostname); //outputting the localhost, using a property on the req obj
    console.log('path: ', req.path); // outputting the path, using a property on the req obj
    console.log('method: ', req.method); // outputting the method, using a property on the req obj
    next(); // this tells express to move from the middleware to the next
});

//Another middleware
app.use((req, res, next) => {
    console.log('in the next middleware:');
    next();
});


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
app.use((resq, res) => {
    res.status(404).render("404", { title: "404" });
});