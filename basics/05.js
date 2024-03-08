//primitive 
/*
7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt
*/
//refernce type or non-primitive
/*
Object , Array , Function
*/
 
//js is dynamically typed language as we dont have to define the type of variable

const id=Symbol("123");
const id2=Symbol("123");
console.log(id===id2); //false

const usingBigInt=(12345678901234567890n); // adding n to the end makes it BigInt

const arr=[1,2,3,4,"Saanvi"];
console.log(arr);
console.log(typeof(arr));
let obj={
    name:"Saanvi",
    age:"19",
    city:"Kurukshetra"
}
console.log(obj);
console.log(obj.name);
console.log(obj["city"]);
console.log(typeof(obj));
const myfunction=()=>{
    console.log("Hello");
}
console.log(typeof(myfunction));





