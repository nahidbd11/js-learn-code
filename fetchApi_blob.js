// async function test() {
//     const response = await fetch("https://picsum.photos/200/300");
//     return  response.blob();
// }
// test().then(data => {
//     console.log(data);
//     let blob = data;
//     let url = URL.createObjectURL(blob);
//     let img = document.createElement("img");
//     img.src = url;
//     document.body.appendChild(img);
//     console.log(url);
// });

function fetchImage(url) {
    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.send();
    req.onload = function (e) {
        console.log(this.response);
        console.log(new Int8Array(this.response));
        let chunkByte = new Int8Array(this.response).subarray(0, 1000); //read some chunk of bytes of the image
        console.log(chunkByte);

        let blob = new Blob([chunkByte], { type: "image/jpeg" });
        console.log(blob.stream().getReader().read().then(data=>console.log(data)));

        let url = URL.createObjectURL(blob);
        let img = document.createElement("img");
        img.src = url;
        document.body.appendChild(img);
        console.log(url);
    }
    req.onerror = function (e) {
        console.log(e.tareget.error);
    }
}

fetchImage("https://picsum.photos/200/300");