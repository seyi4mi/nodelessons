const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method); //(req) alone logs out the request object
    // but here we're loging out the url as well as the method, in this case i's a GET request
});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
});