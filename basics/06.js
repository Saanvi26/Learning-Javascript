//stack(Primitive) heap(non-primitive)
//stack -> returns a copy of the value
//heap -> returns the reference to the value
const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;
userTwo.age=32;
console.log(userOne, userTwo);
