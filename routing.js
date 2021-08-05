// ROUTING - HELPS US TO DISPLAY A DIFFERENT RETURN WHEN USER REQUEST 4 A DIFFERENT ROUTE

//import the file-system module
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader("Content-Type", "text/html");

    //To figure out d path d user visits
    let path = "./views/"; //the html files are the views folder


    //we use the switch statement to figure out what url the user has has visited
    switch (req.url) { // here we we are getting the requested url
        case '/': //we are are trying to ensure that the requested url matches the below cases
            path += "index.html"; // if it matches then we add it to the path
            break; // we break out of the switch so it doesnt continue
        case '/about':
            path += "about.html";
            break;
        default:
            path += '404.html'; // if it matches none of the above the then it add this path and then break out
            break;
    }



    //send an html file
    fs.readFile(path, (err, data) => { // we addthe path from the url the user has visited will be used to read a file
        if (err) {
            console.log(err);
            res.end();
        } else
            res.end(data);
    });


});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
});