//Status codes describe the type of respnse sent tp the browser and how successful the request was

//EXAMPLES OF STATUS CODES
//200 - OK
//301- Resource moved (moved somewhere)
//404- Not found
//500- Internal server error

//RANGES OF STATUS CODES
//100 Range - informational response
//200 Range - success codes
//300 Range -  codes for redirects
//400 Range - success codes user or clientr error codes
//500 Range - server error codes

// -------------------------------------------------------------------------------------------------------------------------------------------//
//SETTING STATUS CODES OF A RESPONSE

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader("Content-Type", "text/html");

    //To figure out d path d user visits
    let path = "./views/";
    switch (req.url) {
        case '/':
            path += "index.html";
            res.statusCode = 200; // we use the response object with it's statusCode property to tell the brower, in this case its succesful hence 200
            break;
        case '/about':
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    } //CHECK NETWORK TO VIEW THIS

    //send an html file
    fs.readFile(path, (err, data) => {
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