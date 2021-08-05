//THE RESPONSE OBJECT -LESSON 4B

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader("Content-Type", "text/plain"); //Header could be a text,cookies etc
    res.write("We wrote this plain"); // this is the text that rwill appear as a reponse using the write object
    res.end(); //the end objects ends the reponse

    //Set Header Using Html 
    // res.setHeader("Content-Type", "text/html");
    // res.write("<p>Hello Guys</p>");
    // res.write("<p>Hello Again,Guys</p>");
    // res.end();
});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
});