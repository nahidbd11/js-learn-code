let data;

const fetchUrl = function (url, cb) {

    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.responseType = "json";
    // req.addEventListener('load', function () {
    //     data = this.response;
    //     console.log(data);
    // }.bind(req));
    req.onload = () => {
        data = req.response
        cb(data);
    };



}

function cb(data) {
    console.log(data.items[0].volumeInfo.description);
    let para = document.createElement('p');
    para.textContent = data.items[0].volumeInfo.description;
    document.body.appendChild(para);
}

fetchUrl('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699', cb);


/****************NOTE:AJAX and Promise together */

function searchUrl(url) {
    return new Promise((resolve, reject) => {

        let req;
        if (window.XMLHttpRequest) req = new XMLHttpRequest();
        else if (window.ActiveXObject) req = new ActiveXObject("Microsoft.XMLHTTP");

        req.open("GET", url, true);

        req.timeout = 3000;

        req.onloadstart = function () {
            console.log('%c%s', 'color:red', "loading star.....")
        }

        req.onprogress = function () {
            console.log('%c%s', 'color:red', 'progresssing...')
        }

        req.ontimeout = function () {
            console.log('%c%s', 'color:red', "time out");
        }

        req.send();

        // req.onload = () => {
        //     resolve(req.response);
        // }

        /**********
         * NOTE:the value of readyState property:
         * 
         *  0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
         **********/
        req.onreadystatechange = function () {
            // console.log(req.readyState, req.response);
            if (req.readyState === 4 && req.status === 200) {
                resolve(req.response);
            }
        }
        req.onerror = (e) => {
            reject('%c%s', 'color:red', "custom error");
            // console.log(req.error);
        }
        req.onloadend = function () {
            console.log('%c%s', 'color:red', "load ended")
        }



    });
}

searchUrl('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("it will run all the time"))


/***************Promise.all allsettled any race ********/

const prom1 = new Promise((resolve, reject) => {
    resolve("resolved promise1");
});
const prom2 = Promise.reject("promise rejected promise2");
const prom3 = Promise.resolve("resolved promise3");

Promise.all([prom1, prom2, prom3])    //rejecct immediately if any promise reject first
    .then(data => console.log(data[0]))
    .catch(err => console.log(err));


Promise.any([prom1, prom2, prom3])       //resolve immediately if any promise resolve first.totally opposite of Promise.all method
    .then(data => console.log(data))
    .catch(err => console.log('%c%s', 'color:blue', err));

Promise.allSettled([prom1, prom2, prom3]) //settle all promise either reject and resolve.we dont need catch method for Promise.allSettled
    .then(data => console.log(data))
    .catch(err => console.log('%c%s', 'color:blue', "this will not work on allSettled"));

Promise.race([prom1, prom2, prom3])      // execute the first result either reject or resolve
    .then(data => console.log(data))
    .catch(err => console.log('%c%s', 'color:blue', err));