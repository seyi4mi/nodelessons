//Creating a Server
const http = require("http");

const server = http.createServer((req, res) => { //method that creates server for us
    //the callback function is going to run anytime a request comes in to d server
    //the function gives us access to 2 object, d request obj n response obj
    //request obj is loaded with info abt d request eg . d url being requested
    //response obj is used to send reponse to the user


    console.log("request made");
}); //to check this type localhost:3000 on the url bar in browser

//Listen mMthod- to make the server listen to reques sent to it
server.listen(5000, "localhost", () => {
    // arugments passed in 1)portno. 2)localhost which is the host name (d default) 3)function 
    //that fires when listening starts

    console.log("listening for requests on port 5000")
});



//Localhost is like a domain name on a web but it takes us to a specific IP address 
//called Loopback IP address(127.0.0.1) which points back to ur own comp
//Localhost (in broswer) ==> 127.0.0.1 ==> Own computer 

//Port numbers are like 'doors' into a computer
//represent a specific channel, or port on our computer that a software or server
//communicate thru