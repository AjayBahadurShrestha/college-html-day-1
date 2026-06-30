// Operator
/*
1. Arithmetic
2. Relational
3. Logical
4. Assignment
5. Ternary
6. Typeof
7. Bitwise
*/ 

//  1 Arithmetic Operator
//  (+, -, *, /, %, **, ++, --)
// Unary [Arithmetic]
// a. increment ++
let number = 7;
console.log(number);
console.log(++number); //pre increment 
let age=10;
console.log(age++); //post increment
console.log(age);

// b. Decrement --
let num = 7;
console.log(num);
console.log(--num); //pre decrement
let ag=10;
console.log(ag--); //post decrement
console.log(ag);

// 2. Relational Operator
// (>, <, >=, <=, ==, ===, !=, !==)

//  == vs ===
let point = 5;
let num1 = "5";
console.log(point==num1) // compares value or datatype
console.log(point===num1) //strict comparision compares value along with datatype

// != vs !==
console.log(5 != "5");
console.log(5 !== "5"); //strict comparision compares value along with datatype