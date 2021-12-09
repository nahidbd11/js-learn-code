let buffer = new ArrayBuffer(16) //8*16=64 bit //we have fixed the byte length. //now we will only work in this chunk of memory
console.log(buffer);
console.log(buffer.byteLength);
console.log([1, 2, 3, 4].fill("nahid"));
console.log(Object.prototype.toString.call([1, 2, 3, 4]));


// let view = new Int8Array(buffer); // 1 integer= 1byte Int16Array(buffer) means 1 integer= 2byte
// console.log(view);

// for (let i = 0; i < view.length; i++) {
//     view[i] = -i * 2;
// }

// console.log(view);
// view[1] = 15;
// console.log(view[1]);
// console.log(view);

/*******MDN code********/

let $int32view = new Int32Array(buffer);
console.log($int32view);
for (let i = 0; i < $int32view.length; i++) {
    $int32view[i] = i * 2;
}
console.log($int32view);
/*******
 * !Multiple view on same data
 * *****/
let $int16view = new Int16Array(buffer);
console.log($int16view);
for (let i = 0; i < $int16view.length; i++) {
    if (i % 2 == 0) {
        continue;
    }
    $int16view[i] = i * 3;
}

// $int16view[1] = 15;
console.log($int16view); //now it contains value from16view and also from 32view

/******
 * !Converting a typed array to normal array
 ***********/
let typedArray = new Uint32Array([1, 2, 3, 4]); //1 integer =4 byte uint16(1 int=2 byte) uint8(1 int=1 byte)
console.log(typedArray.buffer);
let normalArray = Array.from(typedArray);
console.log(normalArray);


let buffer3 = new ArrayBuffer(); //we have already fixed the buffer bytelength so it cant be changed
console.log(buffer.byteLength);

let dataview32 = new Uint32Array(buffer, 0, 3);
console.log(dataview32);
