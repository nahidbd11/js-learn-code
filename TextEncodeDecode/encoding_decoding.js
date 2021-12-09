let buffer = new ArrayBuffer(16);
let uint8array = new Uint8Array(buffer, 4, 10);
let encoder = new TextEncoder();

console.log(uint8array);
let str = "hellow";
let dataview = encoder.encode(str); //!param(str) /
let dataview2 = encoder.encodeInto(str, uint8array); //!param(str,destion_Uint8array)

console.log(dataview); //encode utf-8
console.log(dataview2); //encode to the specific byete location utf-8
console.log(uint8array); //encode to the specific byete location utf-8

/**********TODO:Text Decoding *******/
// let decoder = new TextDecoder();
let decoder = new TextDecoder("utf-8", { fatal: true }); //!param(label,option)

// !label – the encoding, utf - 8 by default, but big5, windows - 1251 and many other are also supported.
// !options – optional object:
// *fatal – boolean, if true then throw an exception for invalid(non - decodable) characters, otherwise(default ) replace them with character \uFFFD.
//     *ignoreBOM – boolean, if true then ignore BOM(an optional byte - order unicode mark), rarely needed.

let decodeStr = decoder.decode(uint8array.subarray(0, str.length)); //!we can also use slice method works same as subarray to make new array from uint8array buffer
console.log(decodeStr);
/******
 * !decode(bufferInput,options)
 *     @options-
 *         *stream – true for decoding streams, when decoder is called repeatedly with incoming chunks of data. In that case a multi-byte character may occasionally split between chunks. This options tells TextDecoder to memorize “unfinished” characters and decode them when the next chunk comes.
 *
 *
 *
 */
