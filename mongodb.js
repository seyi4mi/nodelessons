const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose"); // require mongoose

//express apps
const app = express();
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//MONGOOSE !!!
//Mongoose is an ODM library - Object Document Mapping library
//it wraps th Mongodb API nd provides us we a easier way to connect witth d database
//it does this by allowing us to create data models tht hv db query methods to create get delete nd
//update database documents


//connect to mongodb
const dbURI = "mongodb+srv://Seyifunmi:Keresimesi@nodetuts.ba9pj.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    //we pass the const into the connect methos, then mongoode will connect to the database, the other agrument jst ignore, so u wont get warning msg
    .then((result) => app.listen(3000)) // this will fire when the database is connected, we only listen for requected after the database is connected
    .catch((err) => console.log(err)); //catch method to catch the error
//its async so it will be sloowww
//--------------------------------------------------------------------------------------------------------------------------------------------------------//

//SCHEMAS & MODELS
// schemas is d structure of a type of data/ doc - properties& property type
//we then create a model based on the schema
//the model allows to communicate a database collection
// Blog schema --> Blog Model --> methods (get,save,delete.etc) --> Databade Blog Collection






//register view engine
app.set("view engine", "ejs")

//middleware & static files (css,img etc)
app.use(express.static('public'));

app.use(morgan("dev"));

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