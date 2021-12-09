let inputText = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.createElement("p");
let encodePara;
btn.onclick = function (e) {
    encodePara.innerHTML = "" //remove previous display message
    let binaryMessage = "";
    p.innerHTML = "";
    let str = inputText.value;
    let bArr = [];
    for (let i = 0; i < str.length; i++) {
        bArr.push(str.charCodeAt(i).toString(2));
        binaryMessage += " " + str.charCodeAt(i).toString(2);


    }
    p.innerHTML = binaryMessage;
    document.body.appendChild(p);
    console.log(bArr);
    console.log(binaryMessage);

}

let binrayInput = document.querySelectorAll("input")[1];
let btnDecode = document.querySelectorAll("button")[1];
encodePara = document.createElement("p");
btnDecode.onclick = function (e) {
    // console.log("working", binrayInput.value);
    p.innerText = "" //remove previous display message
    let binaryInputVal = binrayInput.value;
    let Text = binaryInputVal
        .split(" ")
        .map(b => parseInt(b, 2))
        .map(num => String.fromCharCode(num))
        .join('');
    console.log(Text);
    encodePara.innerText = Text;
    document.body.appendChild(encodePara);

}