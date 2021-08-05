// The Global Object - inside a browser the window is the global object
// whereas in node global object represents the global context in a node environment

console.log(global);

// Global Object - methods

global.setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int);
}, 3000); //runs after 3 seconds

// // YOU DONT HAVE TO TYPE GLOBAL because it avaiable out of the box
// setTimeout(() => {
//     console.log('in the timeout')
// }, 5000); //runs after 3 seconds

// const int = setInterval(() => {
//     console.log("in the interval")
// }, 1000); // runs after every 1 second at interval
// // this will keep running so ctrl c to stop or we can clear interval


// //Built-in properties in node
// console.log(__dirname); //gets the absoulte path of the current folder
// console.log(__filename); //gets the absoulte path of the current folder + the file name

// Things in window object we can't be accessed in global object
// console.log(document.querySelector);