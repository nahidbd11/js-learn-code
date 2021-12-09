let symA = Symbol('this is a');
let symD = Symbol('this is a');
console.log(Object.is(symA, symD)); //Symbol is unique

console.log(symA);

let testobj = new Object();
testobj[symA] = "this is a properties";
console.log(testobj[symA]);
console.log(testobj);


let x = 'nahid';
testobj[x] = "this is nahid";
console.log(testobj);
console.log(testobj.nahid);

let symB = Symbol.for('sym for b'); //Symbol is globally available and not unique
let symC = Symbol.for('sym for b');
console.log(symB === symC);
let c = Symbol.keyFor(symB); // keyFor works only those symbol who is globally availabe and use Symbol.for()
console.log(c);




