// Object - collection type, key-value pair

let contentCreator ={
    name: "Ishowspeed",
    mainChanel:"Youtube",
    mood:"Sad",
    speciality:"Fan of Ronaldo"
};

// Acsess Value
// 1. Dot Notation
console.log(contentCreator.name);
// 2. Bracket Notation 
console.log(contentCreator["mood"]);

console.log(contentCreator);
// Adding item in object
contentCreator.country="USA";
console.log(contentCreator);

// update items in object
contentCreator.mood="Very very sad"
console.log(contentCreator)

// delete item in object
delete contentCreator.mainChanel;
console.log(contentCreator);
