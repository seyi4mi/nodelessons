//requiring express app
const express = require("express"); // this reeturns us a fuction nd we're storing it in express

//setting up an express app
const app = express(); // we are involking the function to create an instance of express app

//Listen 4 requests
app.listen(3000); //we dont hv to write localhost coz it alrdy knws

//responding to the request
app.get("/", (req, res) => { //a get object with2 argu.  a)path/url  b)function dat takes in req n res obj

    res.send("<p>Home page</p>"); //we dont hv to use the setheader obj it does it automatically

})