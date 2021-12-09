const map = new Map([['a', 'this is a'], ['b', 'this is b']]);
console.log(map);

console.log(map.get('a'));

console.log(map.has('a'));

console.log(map.size);

console.log(map.set('c', 'this is c'));

map.delete('a');
console.log(map);

map.clear();
console.log(map);

