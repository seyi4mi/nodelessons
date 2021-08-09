const mongoose = require("mongoose"); // require mongoose

//we get the schemas from the mongoose package
const Schema = mongoose.Schema; // require mongoose

//Create new schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
    //here we create a new shecma called blogSchema then made a new instance of a schema obj
    //we pass in an obj as a parameter, so tht it can set the stucture of the doc we'll store in our blogs collection
    //the made a structure that has a title, snippet and body property with its object

}, { timestamps: true }); // we add another argu which is a timestamp property, it add the time a new blog is created or updated


//Create new Model
const Blog = mongoose.model("Blog", blogSchema); // the name of the models r to be in captial letters
//the model takes the name model (blog)  as its first agruement because its going to pluralize
//nd look for the collection inside the database whenevver we use this model in d future
//2nd argu is our blog schema
module.exports = Blogs;