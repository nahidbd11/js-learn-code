function swimmer(state) {
  return {
    swim: state.pname + " can swim",
  };
}

function flyier(state) {
  return {
    fly: state.pname + " can fly",
  };
}

function speaker(state) {
  return {
    speak: state.pname + " can speak",
  };
}

function barker(state) {
  return {
    bark: state.pname + " can bark",
  };
}

function Man(pname, age) {
  let man = {
    pname,
    age,
  };

  return Object.assign(man, swimmer(man), speaker(man));
}
let nahid = Man("nahid", 24);
console.log(nahid.swim);

function Bird(pname, age) {
  let bird = {
    pname,
    age,
  };

  return Object.assign(bird, flyier(bird), speaker(bird));
}
let parrot = Bird("parrot", 2);
console.log(parrot.fly);

function Animal(pname) {
  let animal = {
    pname,
  };
  return Object.assign(animal, barker(animal));
}

let lion = Animal("lion");
console.log(lion.bark);

/***********
 * *description:
 * @write method and  properties outside of class
 * !add necessary properties or method from outside the class by Object.assign method
 * create object instances and access data
 * */
