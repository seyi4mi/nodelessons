//RETURNING HTML PAGES USING THE FILE SYSTEM

//import the file-system module
const fs = require("fs");

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader("Content-Type", "text/html");

    //send an html file
    fs.readFile("./views/index.html", (err, data) => {
        // we read the file by adding the path,  the call back function will work 
        // when the file has been read
        if (err) {
            console.log(err); // this would be logged if there's a error
            res.end() // you have to end as well in case there's an error
        } else {
            res.write(data);
            res.end() // this would be display the index.html file
                // res.end(data);//this is another way to run it and its best when there's only one file needed to be run
        }
    });


});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
});