const people = ["Naomi", "Esther", "Kpee", "Dapo"];
const ages = [28, 26, 19, 27];
console.log(people);

// TO EXPORT SINGLE THING
module.exports = people;

// TO EXPORT MULTIPLE THINGS
module.exports = {
    people: people //we adding a property called ppl n seeting the value to be ppl
        ,
    ages: ages
};