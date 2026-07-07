// String --> '', " " and ` `

let firstName = "Ajay";
let lastName= "Shrestha";
let fullName = (firstName+" "+lastName);
console.log(fullName);

//Length
console.log(fullName.length);

// index --> str.charAt(index)
console.log(fullName.charAt(0), fullName.charAt(1));

// slice --> str.slice(start, end), str.slice(start)
let subject = "JavaScript";
//Java
console.log(subject.slice(0,4));
//Javascript
console.log(subject.slice(0));

//avaScript
console.log(subject.slice(1));