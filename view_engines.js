const express = require("express");
//setting up an express app
const app = express();

//registering view engine -lets us write html template nd other data like variables ,loops and the dispaly their result in the broswer
//1)install ejs (npm install ejs)
//2)Set ejs as our view engine
app.set("view engine", "ejs") //set lets us configure application settings, one of d settings is the view engine
    //here we have the view engine set has and we choose the ejs engine to create our template

//Listen 4 requests
app.listen(3000);
app.get("/", (req, res) => {
    res.render('index'); //basically just displays the index.ejs
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/blogs/create", (req, res) => {
    res.render("create");
});

//404 page
app.use((resq, res) => {
    res.status(404).render("404");
});