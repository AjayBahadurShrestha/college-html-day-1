// Data Type in JS
/* 
1.⁠ ⁠Primary Data Type
a.Number
b.String
c.BigInt
d.Undefined
e.Null
f.Boolean
g.Symbol

2.⁠ ⁠Non Primary Data Type

a. object
b. Array
c. Function
*/




//a. Number -- Both Whole Number and decimal Number

let age=18;
const pi=3.14;
console.log(typeof age , typeof pi);


//b. String -- anything enclosed by single quote ' ' , 
// double quote " " , and backtick ` `
let secName = 'Section A' ;
let paragraph=`
Today is placement  Day in LBEF College.
All students are highly recommended to visit during placement hour.
`
console.log(secName, typeof secName)
console.log(paragraph, typeof paragraph)


//c. BigInt - represent whole number , big in size , has n at the end of the number

let mansionPrice= 75000000000000000000000000000000000000n;
console.log(mansionPrice, typeof mansionPrice)


// d. Undefined -no value, just variable is declared.
let finalValue;
console.log(finalValue, typeof finalValue);

// e. Null - value is assignment with null, for later use

let discount = null;
console.log(discount, typeof discount);

// f. Boolean - ttrue/false

let isStudent = true;
let isCOO = false;
console.log(isStudent, typeof isStudent);
console.log(isCOO, typeof isCOO);

// g. Symbol - unique for Objects.
let std_ID = Symbol("1001");
console.log(std_ID, typeof std_ID);