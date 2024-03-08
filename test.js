console.log("Hello");
const accountId=144553; //cannot be changed
let accountEmail="saanvi@gmail.com"; //can be changed :- new method
var accountPassword="saanvi123"; //can be changed :-old method
accountCity="Dehradun";
let accountState;
// accountId=4  Error
// console.log(accountId) 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var because of its global scope 
*/

var a=1;
var a=5;
console.log(a); //redefining with var is the issue and not a good practice
let b=1;
// let b=5; //Error
console.log(b);