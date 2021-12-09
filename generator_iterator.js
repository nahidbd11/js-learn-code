
/**********@Custom_Iterator ***********/

function makeIterator(start = 0, end = Infinity, step = 2) {
    let nextIndex = start;
    return {
        next() {
            if (nextIndex <= end) {

                const result = { value: nextIndex, done: false };
                nextIndex += step;
                return result

            }
            return { value: undefined, done: true };
        }
    }
}

let it = makeIterator(0, 10, 2);
let result = it.next();
while (!result.done) {
    console.log(result.value);
    result = it.next();
}

/*******@Generator_function_give_us_automatic_iterator_via_yield keyword*/

function* generator(start = 0, end = Infinity, step = 1) {

    for (let i = start; i < end; i++) {
        yield i;
    }
}

let it1 = generator(0, Infinity, 1);
for (let numb of it1) {
    console.log(numb)
    if (numb > 5) {
        break;
    }
}

/*********@object_Custom_iterator  */
let obj = {

    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3
    }

}

for (let num of obj) console.log("%c%s", "color:black", "custom obj iterator", num);



/************@Passing value to generator function via next(val) and generator func yiled another generator *****/

function* anotherGen() {
    yield "another";
    yield "generator"
}
function* gen() {
    yield* [1, 2, 3]; // use * to yield any iterable object including generator function
    yield* anotherGen();
}

const it2 = gen();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

function* passingParamtoYield() {
    let result = yield 'param will pass here';
    yield result;
}

let it4 = passingParamtoYield();
console.log(it4.next(4)); //first invocation will not pass the parameter
console.log(it4.next(4)); //this will work after first invocation






/*******************Fibonacci series *******/
import FibonacciGen from './UsingGenFunc.js';

let it3 = FibonacciGen();
console.log(it3.next().value);
console.log(it3.next().value);
console.log(it3.next().value);
console.log(it3.next().value);

/**************Unique Random array Value**********/

let arr = ["nahid", "messi", "einstein"];

function* uniqueArrayGen(arr) {

    while (arr.length) {

        let randIndex = Math.floor(Math.random() * arr.length);
        let value = arr[randIndex];
        arr.splice(randIndex, 1);
        yield value;
    }

    return null
}

const uniqueArray = uniqueArrayGen(arr);
for (let name of uniqueArray) {
    console.log(name);
}








