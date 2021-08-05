//REDIRECT - USED WHEN YOU'VE UPDATED/ CHANGED A FORMER URL NAME
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
            res.statusCode = 200;
            break;
        case '/about':
            path += "about.html";
            res.statusCode = 200;
            break;
        case '/about-me': // Over the about-me page has be moved to about 
            res.statusCode = 301; // shows it had be permanently moved
            //to actually redirect we use the setHeader with 2 agrument a) location b)the new url
            res.setHeader("Location", '/about');
            res.end();
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