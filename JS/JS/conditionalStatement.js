// Conditional Statement JS
// if statement
// if - else statement
// if - else if - else statement
// nested if else statement
// switch case

// if - else if - else statement
// Write a js program to check if a number is positive, negative or zero:
let number = 15;
if (number > 0){
    console.log("Positive Number");
}
else if (number < 0){
    console.log("Negative Number");
}
else{
    console.log("Zero");
}

// Switch case
// Syntax:
/*
switch(option){
case opt1:
    code
    break;
........
default:
    code
}
*/
// Write a menu driven program to simulate atm options after login.
console.log(`
    1. Fast Cash
    2. Cash Withdraw
    3. Balance Inquiry
    4. Reset Password
    `);
let option = 1;
switch (option){
    case 1:
        console.log("Fasts Cash Selected");
        break;
    case 2:
        console.log("Cash Withdraw Selected");
        break;
    default:
        console.log("Invalid Choice, Thank You For Visiting!!");
}