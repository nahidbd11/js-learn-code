let textField = document.querySelector("textarea");

let timer;
let timeout = 3000;
if (localStorage.textValue) {
    textField.value = localStorage.textValue;
}

/*****NOTE: Solution 1 *****/

// textField.onkeyup = function (e) {

//     //TODO: save the data after 3s of stop typing

//     console.log(this.value);
// console.log(e);
//     timer = setTimeout(function () {
//         console.log("working.")
//         localStorage.setItem("textValue", this.value);
//     }.bind(textField), timeout);

// }

// textField.onkeydown = function (e) {
//stop timer whenever start typing
//     clearTimeout(timer);
// }

/***NOTE: Solution 2*****/


textField.oninput = function (e) {
    localStorage.setItem("textValue", this.value);
    console.log(this.value);
}