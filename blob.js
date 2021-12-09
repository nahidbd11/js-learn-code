let blob = new Blob(["<html>nahid</html>"], { type: 'text/plain' });
console.log(blob.text().then(val => console.log(val)));
let str = "5";
console.log(str.charCodeAt(0));

let uint8array = new Uint8Array([72, 101, 108, 108, 111]);
let blob2 = new Blob([uint8array, " ", "world"], { type: "text/plain" });
blob2.arrayBuffer()
    .then(data => {
        let uint8array = new Uint8Array(data);
        console.log(uint8array);
        let charcArr = []
        for (let code of uint8array) {
            charcArr.push(String.fromCodePoint(code));
        }
        console.log(charcArr.join(""));

    }
    );

/*******NOTE:Downloadig blob elements to localComputer */

let url = URL.createObjectURL(blob2);
console.log(blob2.slice(1, 8).arrayBuffer());
console.log(url);

let link = document.createElement("a");
link.textContent = "download";
link.href = url;
link.download = "hello.txt";
document.body.appendChild(link);
URL.revokeObjectURL(link.href); //after downloading delete the reference of the blob on memory


/****NOTE:Blob to base64 *******/

let blob3 = new Blob(['Hello, world!'], { type: 'text/plain' });

let reader = new FileReader();
reader.readAsDataURL(blob3);
reader.onload = function (e) {
    console.log(reader);
    console.log(reader.result);

}
/******NOTE:Blob to arraybuffer */
let reader_buffer = new FileReader();
reader_buffer.readAsArrayBuffer(blob3);
reader_buffer.onload = function (e) {
    console.log(this.result);
}