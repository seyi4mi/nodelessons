// Import the fs(file system) module
const fs = require("fs");

// Reading Files
fs.readFile("./docs/blog1.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString()); //without the toString we get a buffer, to string converts it to string
}); //takes in 2 arguement, 1 is relative path string, 2nd is function that will take place when 
//the reading is done becoz it's the readfile method is asynchronous
// once it's done reading it will fire the function 

console.log("lastline"); //last line will be outputted first becoz readfile is asynchronous
/////////////////////////////////////////////

// Writing Files

fs.writeFile('./docs/blog1.text', "Hello, World", () => {
    console.group("file was written")
});

fs.writeFile('./docs/blog2.text', "Hello, Again", () => {
    console.group("file was written")
}); //if u add a wrong file path it will create the file for u and write on it , u dont get error msg

//takes in 2arguement, 1 is relative path string, 2nd is a the string containing what you want to write
// 3rd is call back function because writeFile is also asynchronous

// Directories

if (!fs.existsSync("./assets")) { //existsSync will block the code n check if smtg exist, 
    // this means if asset doesnt exist creat a new folder named asset
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    });
} //it will make a new folder
else { // this means only run ithe above if asset doent exist, but if it does remove the folder 
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("folder deleted")
    })
}


// Deleting Files
if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
            if (err) {
                console.log(err);
            }
            console.log("file deleted");
        }) //unlink is the method used to deleted a file
}