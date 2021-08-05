//  TO IMPORT AND EXPORT THINGS INTO DIFFERENT FILES
// A REQUIRE STATEMENT IS USE TO IMPORT FILES

const xyz = require("./people") // allows  everything in ppl file to run

// console.log(xyz); //this will return an empty object

// ACCESSING VARIABLES FROMTHE PEOPLES FILE
// console.log(people); //this wont work hence importinga file donest give us access 
//to it's variable or things in the file

// TO ACCES PEOPLE FRM D MODULE FILE WE'LL HAVE TO AMUALLY EXPORT IT FRM D
// people file

// console.log(xyz); //after exporting, xyz will now become the value of whatever export regardless the name
//xyz will take the value of people since exported it that way, we don't hv to change xyz to people, as 
//it doesn't need the same name


console.log(xyz);
console.log(xyz.people, xyz.ages);

// DESTRUCTURING - WAY TO IMPORT MULTIPLE THINGS FRM A DIFF FILE
const { people, ages } = require("./people") //we add a destructing object ,inside the destructing object, we add any of property we want from the export object in d ppl file
console.log(people, ages);

// bulit in modules in node
const os = require("os");
console.log(os);
// their methods
console.log(os.platform(), os.homedir());