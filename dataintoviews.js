const express = require("express");
const app = express();


app.set("view engine", "ejs")

//Listen 4 requests
app.listen(3000);
app.get("/", (req, res) => {
    const blogs = [
        { title: 'Esther wins the Voice', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Kpee has a good heart', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Naomi still remains the queen', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ]; //an array with 3 objects

    res.render('index', { title: "Home", blogs: blogs }); // we r passing anobject as a second parameter
    //the obj will hv d property title :'home" this woukd be passed the new data passsed to the
    //html

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