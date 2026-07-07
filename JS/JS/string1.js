// String Day 2
let firstname = "Cristiano";
let lastname = "Ronaldo";
// concatenation
let fullName= firstname +" "+ lastname;
console.log(fullName);
//  Length
console.log(fullName.length);
// String Interpolation
console.log(`Player Name ${fullName}`);
// UpperCase
console.log(fullName.toUpperCase());
// Lower Case
console.log(fullName.toLowerCase());

// Include()- check if substring present in string or not.
// returns true if substring is present, else return false.
console.log(fullName.includes("Cristiano"));

// Replace()- changes to substring with new value
// str.replace(substring, newstring);
console.log(fullName.replace("Ronaldo", "Rawal"));