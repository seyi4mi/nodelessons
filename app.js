//requiring express app
const express = require("express"); // this reeturns us a fuction nd we're storing it in express

//setting up an express app
const app = express(); // we are involking the function to create an instance of express app

//Listen 4 requests
app.listen(3000); //we dont hv to write localhost coz it alrdy knws

//responding to the request
app.get("/", (req, res) => { //a get object with2 argu.  a)path/url  b)function dat takes in req n res obj

    // res.send("<p>Home page</p>"); //we dont hv to use the setheader obj it does it automatically

    res.sendFile("./views/index.html", { root: __dirname });
    //express will look 4 an absoulte path(root path) by default so, the ./view etc wont work
    //we pass in another argu, that specify what the root is {__dirname} gets us the current directory we're in
});


app.get("/about", (req, res) => {
    // res.send("<p>About page</p>");

    res.sendFile("./views/about.html", { root: __dirname });
});