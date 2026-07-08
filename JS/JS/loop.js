// Looping Statement
/*
1.For loop
2.while loop
3.do while loop
4.for-of loop
5.for-in loop
*/


//For loop
//syntax:
/*
for (intialization; condition;increment/decrement){
//code
}
*/

//Write a js program to display 1-10.
for (let i=1;i<=10;i++){
    console.log(i);
}

//While loop
//Syntax
/*
//While loop (condition){
    code;
    increment/decrement;
}
    */


// Write a js program to display number in descending order [10-0]
let i=10;
while(i>=0){
    console.log(i)
    i=i-1
}


// 3. do-while loop
// Syntax:
/*
do{
code;
increment/decrement
}while(condition);
*/

//Display number betweem 20 amd 50.
console.log("Do while")
let number1=20;
do{
    console.log(number1)
    number1++;
}while (number1>=20 && number1<=50);




//for-of loop - used in array , easier to travel in array.
//Syntax:
/*
for (let item of arr){
//code
}
*/


let teams=["Morocco","Belgium","Norway","France","Argentina"]
console.log("for of loop")
for (let team in teams){
    console.log(teams[team]);
}



//for -in loop - used for object
let player={
    name:"CR7",
    country:"portugal",
    eurocup:1
};

console.log("for in loop")
for(let key in player) {
    console.log(key,player[key])
}