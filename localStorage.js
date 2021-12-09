/*************
 * 
 * !localStorage 
 *
  ** setItem(key, value) – store key/value pair.
  ** getItem(key) – get the value by key.
  ** removeItem(key) – remove the key with its value.
  ** clear() – delete everything.
  ** key(index) – get the key on a given position.
  ** length – the number of stored items.

 * 
 */


// let inputField = document.querySelector("input");
// inputField.onkeypress = function (e) {

//     console.log(e)
//     if (e.charCode === 13) {
//         document.write("you hit enter");
//         console.log(this.value);
//         console.log(localStorage.setItem("inputVal", this.value));
//         document.write("<p style='color:green'>your data has saved successfully</p>")
//     }
// }


let loginBtn = document.querySelector("#submit");
let signupBtn = document.querySelector("#signup");
let showBtn = document.querySelector("#showData");
let deleteBtn = document.querySelector("#deleteData");

let username = document.querySelector("#username");
let password = document.querySelector("#password");

console.log(loginBtn);
loginBtn.onclick = function (e) {
    e.preventDefault();

    if (username.value === localStorage.getItem("username") && password.value === localStorage.getItem("password")) {
        alert("you are successfully logged in");
    } else {
        document.write("wrong Credintial,Please try again");
    }



}

signupBtn.onclick = function (e) {
    e.preventDefault();
    /******NOTE:save data *****/
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    if (localStorage.getItem("username") === username.value) {
        document.write("successfully data is saved");
    }
    console.log(localStorage.length);
}

showBtn.onclick = function (e) {
    e.preventDefault();
    /****NOTE: using Object.keys(obj) ******/

    // let keys = Object.keys(localStorage);
    // for (let k of keys) {
    //     console.log("key=", k, "value=", localStorage[k]);
    // }

    /*********NOTE: using forloops *******/

    // for (let i = 0; i < localStorage.length; i++) {
    //     console.log("key=", localStorage.key(i), "value=", localStorage[localStorage.key(i)]);
    // }
    /*********NOTE: using for .. in ********/
    // for (key in localStorage) {
    //     console.log(key); //!it shows all the key of localStorage including getItem,setItem,removeItem,clear,length.so this is bad try
    // }

    for (key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; //!skip those builtin key like getItem,clear,lenght.....
        }
        else {
            console.log(key);
        }
    }


}

deleteBtn.onclick = function (e) {
    e.preventDefault()

    keys = Object.keys(localStorage);

    for (let k of keys) {
        // localStorage.removeItem(k); //! remove key and value
        // /******OR****/
        delete localStorage[k];
    }
    if (!localStorage.length) {
        console.log("%c%s", "color:red", "All data deleted")
    }


    /*******NOTE:Delete key */
    // delete localStorage.username;
    // delete localStorage.password;

}


/******
 * Please note that both key and value must be strings.

If were any other type, like a number, or an object, it gets converted to string automatically:

sessionStorage.user = {name: "John"};
alert(sessionStorage.user); // [object Object]

We can use JSON to store objects though:

sessionStorage.user = JSON.stringify({name: "John"});

// sometime later
let user = JSON.parse( sessionStorage.user );
alert( user.name ); // John
 *
 *
 */
window.onstorage = function (e) {
    console.log("triggerd storage event")
}
