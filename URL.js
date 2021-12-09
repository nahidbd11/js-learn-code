// let $myurl = new URL(window.location.href); // return the current webpageurl
let $myurl = new URL("https://www.google.com/search");

console.log($myurl);
$myurl.search = "?name=nahid&age=23";
console.log($myurl);

let link = document.createElement("a");
link.href = $myurl;
link.textContent = "check this url"
document.body.appendChild(link)


let baseurl = new URL("https://www.facebook.com/messages/t/~!@你好");

let encodeUrl = encodeURI(baseurl); //encode whole url only the forbidden character on url 

let music = encodeURIComponent('Rock&Roll'); //encode a part of url. space  of rock and roll will be eoncode
console.log(baseurl + `q=${music}`);
try {
    let decodeurl = decodeURI(encodeUrl);
    console.log(decodeurl);
} catch (e) {
    console.log(e);
} finally {
    console.log(baseurl.toString());
}


let decodeUrlComponent = decodeURIComponent(music);
console.log(decodeUrlComponent);


let destinationUrl = new URL("cuetiansobuj.khan", baseurl);

destinationUrl.searchParams.append("name", "nahid");
destinationUrl.searchParams.delete("name");

/*******TODO:other searchParams method and properties check mdn url */

console.log(destinationUrl.href);

console.log(destinationUrl.toJSON());


let linkfb = document.createElement("a");
linkfb.href = destinationUrl;
linkfb.innerHTML = "<br>" + "facebook<br>"
document.body.appendChild(linkfb);


function findCharPoint(str) {
    let charCode = [];
    Array.from(str).forEach((e, i) => {
        charCode.push(str.codePointAt(i));
    });

    //****TODO:Testing for of with key,value */

    let arr = new Map([['a', 'nahid'], ['b', 'jahid'], ['c', 'khalid']]);
    for (let [k, v] of arr) {
        console.log(k, v);
    }
    return charCode;
}

console.log(findCharPoint("hellow"));
let uint8array = new Uint8Array(findCharPoint('hellow Nahid my friend how are you?'))
let blob = new Blob([uint8array], { type: 'text/plain' });
console.log(blob.arrayBuffer());

let blobUrl = URL.createObjectURL(blob); //!create url for blob resource
console.log(blobUrl);

let linkBlob = document.createElement('a');

linkBlob.textContent = "download blob";

linkBlob.href = blobUrl;

linkBlob.download = "blobtxt.txt";

document.body.appendChild(linkBlob);


URL.revokeObjectURL(blobUrl); //once downloaded now delete the url


/****NOTE:Read blob file ******/

let reader = new FileReader();
reader.readAsDataURL(blob); //!converting blob to base64 encoding
reader.onload = function (e) {
    console.log(reader.result);
}