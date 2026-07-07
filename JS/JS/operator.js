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

/* Logical Operator
a. And (&&)
b. OR (||)
c. Not (!)

Voting Eligible Check -(age, citizenship)
*/

let Age = 19;
let hasCitizenship = true;
let isEligible= Age>=18 && hasCitizenship;
console.log("Voting eligible: ", isEligible);


/*
Assignment (=)
(+=, -=, *=, /=)
*/
let salary = 60000;
// salary= salary+5000
salary+=5000;
console.log("Salary: ",salary )


/*
Ternary
Syntax: 
    condition ? trueCase : falseCase
    Spain chances to win worldcup 2026.
*/
let winGames = true;
let chances = winGames? "Lifts trophy" : "Lose World Cup";
console.log(chances);

/*
Bitwise - ( Bitwise AND (&) Bitwise OR(|), Bitwise X-OR (^), Bitwise Not (~), Left Shift (<<), Right Shift (>>) )
*/

let bitfirst = 10;
let bitsecond = 11;
console.log("Bitwise And: ", bitfirst&bitsecond);
console.log("Bitwise OR: ", bitfirst|bitsecond);
console.log("Bitwise X-OR: ", bitfirst^bitsecond);
console.log("Bitwise NOT: ", ~bitfirst);
console.log("Bitwise Left shift: ", bitfirst<<bitsecond);
console.log("Bitwise Right shift: ", bitfirst>>bitsecond);

// left shift
console.log(5, 5<<1, 5<<2);

// right shift
console.log(15, 15>>1, 15>>2);

// BItwise Not (~)
// ~n =- (n+1)

let luckyNumber=3;
console.log(~luckyNumber);
let bitwiseNot= luckyNumber+(~luckyNumber)+1;
console.log(bitwiseNot)