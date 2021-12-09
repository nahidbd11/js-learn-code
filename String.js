console.log("%c%s", 'color:green', "this is a string")
const log = console.log;
function findCharCode(string) {

    for (let i = 0; i < string.length; i++) {
        log(string.charAt(i), string.charCodeAt(i));
        log(string.charAt(i), string.charCodeAt(i).toString(2)); //converted charater code to binary value

    }
}

findCharCode('你好');

log('%c%s', 'color:red', String.fromCharCode(116, 104, 105, 115)) //make string from charCode

const str = "this messi is messi messi messi!!!!!!!";
const str1 = "and he is a legend";

log(str.concat(str1)); //add two string
log(str.endsWith('!')); //true
log(str.includes('messi', 0)); //@param (searchWord,from where to start searching)=>true/false
log(str.indexOf('messi', 0)); //@param same as includes function return value is either the index if find or -1 if not find the searchWord
log(str1.padEnd(30, ' he')); //@param (total target length of the string,padString);
log(str.repeat(2)); //repeat the string of giving times
log(str.search('messi')); //return index of first match 