


function createObj(name, age, location) {
    return {
        name, age, location
    }

}

const obj = createObj('nahid', 20, 'sobujpara');

let { name: n, age: a, location: l, country: c = "default country" } = obj
console.log(c);

let objP = Object.create(obj, {
    foo: {
        writable: false,
        value: 'this is foo'
    }
});
console.log(objP);
console.log(Object.entries(obj)); //!object.entries(obj)  return[ [key,value] ] array
