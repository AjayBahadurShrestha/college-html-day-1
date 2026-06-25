//Variable in JS

// Variable Declarations:

// 1. Var - global sized, redclared, reassigned
var country ='Nepal';
console.log(country)
var country ='Haiti';
console.log(country)

// 2. let -black sizedm reassigned, cannot be declared in same scope
let sport = "Football";

console.log("Sport: ",sport);
sport="Cricket";
console.log("Sport: ", sport);

// 3. const - block sized, final value
const pi =3.14;
// pi = 'Cutepie' - Error
console.log('Pi : ',pi);


// Rules for defining Variables

/*
1. Characters(A-Z, a-z), Numbers (0-9) and Special Character('_' and '$' )are valid
2. Cannot start the variable name with digit.
3. Case sensitive
4. Avoid Whitespace
5. Cannot use reserve keywords
*/