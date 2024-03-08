const arr=[1,3,4,6,7,9];
//arrays in js have shallow copy 
const myarr=new Array(arr);
const myarr2=new Array(1,2,2,3,6);
console.log(myarr2.length);
myarr2.push(7);
console.log(myarr2);
myarr2.pop();
console.log(myarr2);
myarr2.unshift(99);
console.log(myarr2);
myarr2.unshift(4, 5)
console.log(myarr2);
myarr2.shift();
console.log(myarr2);
console.log(myarr2.includes(2));
console.log(myarr2.join());

// slice and splice

const myarr3=myarr2.slice(1,3);
console.log(myarr3);
const myarr4=myarr2.splice(1,3);
console.log(myarr4);
console.log(myarr2); // removes the value from the array in the given range of indices

