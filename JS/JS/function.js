/*
1. Function Declearation
2. Function Expression
3. Arrow FUnction


Function Declaration -- reuable block of code, hoiste function

Syntax:
function functionName()
code;
}
*/

console.log("Function Declearation");
// Function Define
function greet(){
    console.log("Hello World!!");
}
// Function call
greet();

// Function with argument and parameter.
// JS code to display name

console.log("Function with argument and parameter");

function display(name){
    console.log(`Name: ${name}`);
}
display('Ajay Bahadur Shrestha');
display('Subodh Achar')

// Function with return types
console.log("Return Type Function");
// Function to return sum of two digit
let first =10;
let second =20;
function Sum(x,y){
    return x+y;
}
let result = Sum(first, second);
console.log("Sum: ", result);

// Function Hoisting - Function is called before the declaration (only works in function decleration)
//Function to display "Welcome to the LBEF Family" using function hoisting.
console.log("Function Hoisting!");
welcome();

function welcome(){
    console.log("Welcome to the LBEF Family");
}

// Function Expression - Function is stored in a variable, f;unction name isnot necessary during function definition, ends with; after function {}
console.log("Function Expression!");
let func = function(){
    console.log("This is function expression");
};
func();

// Function to calculate substraction of two numbers using function expression
console.log("Subtraction Assignment");
let sub= function(){
    console.log(`Subtraction of two numbers are ${150-120}`)
};
sub();


// Arrow Function - in arrow function, no need to write function keyword, function name. and return symbol KEYWORD, doesnot support hoisting
// Syntax: () => Code;
// Arrow FUnction to display name



/*
Arrow Function.
Area of rectangle;
Volume of cuboid
Simple Interest.
disiplay "Odessy - Directed by CHristopher Nolan."
*/


console.log("---------------Arrow Function---------------");

let name = (namePara) => `Name: ${namePara}`;
console.log(name("Daya Hang Rai"));

//Area of rectangle
let areaRectangle = (length, breadth) => length * breadth;
console.log("Area of Rectangle:", areaRectangle(10, 5));

//Volume of cuboid
let volumeCuboid = (length, breadth, height) => length * breadth * height;
console.log("Volume of Cuboid:", volumeCuboid(10, 5, 3));

//Simple Interest
let simpleInterest = (principal, rate, time) => (principal * rate * time) / 100;
console.log("Simple Interest:", simpleInterest(1000, 5, 2));

//Display movie info
let movieInfo = () => "Odessy - Directed by Christopher Nolan.";
console.log(movieInfo());
