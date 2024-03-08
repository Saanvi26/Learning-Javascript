//conversion of datatypes
let ans="10"
let valueInNumber=Number(ans);
console.log(typeof(ans));
console.log(typeof(valueInNumber));
let ans2="abc"; //let ans2;
let value=Number(ans2);
console.log(value); //NaN in case its undefined or not a number

//"10" -> 10
//"33abc" -> NaN
//true -> 1
//false -> 0

let isLoggedIn=1;
console.log(Boolean(isLoggedIn)); //true

let isLoggedIn2="Saanvi";
console.log(Boolean(isLoggedIn2)); //true

let isLoggedIn3="";
console.log(Boolean(isLoggedIn3)); //false

let num=null;
console.log(Boolean(num)); //false
let num2=100;
console.log(String(num2)); //100
