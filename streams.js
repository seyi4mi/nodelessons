// Streams allow you to use large data before it finish loading

const fs = require("fs");

//ReadStream
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: "utf8" });
// enoding allows it to automatically turn to string as its being loaded, else u can 
// use the the toString() method

//WriteStream
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on('data', (chunk) => { //.on is an event listener, that acts when we recieve small sets of buffer
    // this means everytime we get a new chuck of data the function is fired
    console.log("------ NEW CHUNK ------");
    console.log(chunk);


    writeStream.write("\nNEW CHUNK\n") //n means in line in a file
    writeStream.write(chunk); // this means everythime we get new data from read stream we take it and  write it into the new file
});

//PIPING - soes the same thing above, but a short version, it pipes all the data of the readstream into the writestream
// readStream.pipe(writeStream);