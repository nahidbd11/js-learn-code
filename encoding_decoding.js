
let encoder = new TextEncoder();
let encodevalue = encoder.encode("hello");
console.log(encodevalue);

let decoder = new TextDecoder();
let decodeVal = decoder.decode(encodevalue, { stream: true });
console.log(decodeVal);