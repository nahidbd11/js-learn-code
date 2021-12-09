let targetobj = {};

const p = new Proxy(targetobj, {
    get: function (targetobj, key) {
        return targetobj[key];
    },
    set: function (targetobj, key, value) {
        return targetobj[key] = value;
    }
});

p.name = "nahid";
console.log(p.name);




let target = {
    username: 'nahid',
    gmail: 'nahid@gmail.com',
    _password: "***111"
}

const handler = {
    get(target, key) {
        if (key in target && key.includes('_')) {
            return 'Sorry permission denied';
        }
        else {
            return target[key];
        }
    }
}
let userProxy = new Proxy(target, handler);
console.log(userProxy._password);
console.log(userProxy.gmail);


function testFunc({ gname: g, legend: l, nationality: n }) {

    console.log('this is from test func');
    return { g, l, n }
}

const testobj = {
    gname: "football",
    legend: "Lionel messi",
    nationality: "Argentina"
}
console.log(testFunc(testobj));

let proxyFunc = new Proxy(testFunc, {
    get(target, key) {
        if (key in target) return target[key];
        return "default value"
    },
    apply(target, thisArg, args) {
        console.log(...args);
        return target(...args)['g'] + "i addeed by handler";
    }
});

console.log(proxyFunc({ gname: "nahid", legend: "he he", nationality: "bd" }));

/********
 * NOTE: proxy change the default behaviour of target obj or func
 * !Proxy has three elements : target,handler,trap
 *
 *
 *
 */