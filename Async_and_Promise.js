
async function test() {
    let response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    let responseData = await response.json();
    console.log(responseData);
}

test();


async function FetchAsync(url) {
    //NOTE:async func handle errors with try catch 
    try {
        let response = await fetch(url); //fetch api works like ajax
        console.log(response);
        if (response.status === 200) {
            let responseData = await response.json();
            return responseData; //HACK:async func return promise
        } else {
            throw new Error('this is a new error');
        }
    } catch (err) { console.log(err) };
}

FetchAsync("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(data => addToDom(data))

function addToDom(data) {

    const img = document.createElement('img');
    const p = document.createElement('p');
    p.textContent = data.items[0]['volumeInfo']['description'];
    document.body.appendChild(p);
    img.src = data.items[0]['volumeInfo']['imageLinks']['thumbnail'];
    document.body.appendChild(img);



}