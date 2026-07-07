// array in JS - collection type, dynamic size, heterogenous data.

let hastag =["#CR7", "#Portugal", "#WC2026", "#RMadrid"];
console.log(hastag);
// Length
console.log(hastag.length);
// Index
console.log(hastag[0],hastag[1]);
//Change Value
hastag[2] = "#WC2030";
console.log(hastag);

// Add Value
let team = ["Germany", "Brazil", "Portugal", "Netherland"]
// i. push()- add items in array from the last.
team.push("Senegal");
console.log(team);

// ii. unshift()- add items in array from start
team.unshift("Mexico");
console.log(team);

// Remove Value
let WCWinners = ["Croatia" ,"Italy", "Brazil", "Germany", "Portugal"];
// i. pop() - remove item in an array from last
WCWinners.pop();
console.log(WCWinners);

// ii. shift() - removes items in an array from start
WCWinners.shift();
console.log(WCWinners);