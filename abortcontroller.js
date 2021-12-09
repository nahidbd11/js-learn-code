let controller = new AbortController();
let { signal } = controller;
console.log(controller);

let timeout = setTimeout(() => controller.abort(), 500);
var x;

x = fetch("https://catfact.ninja/fact", { signal })
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => err);
let btn = document.createElement("button");
btn.textContent = "click me";
document.body.appendChild(btn);
let envetController = new AbortController();
let evntsignal = envetController.signal;
btn.addEventListener(
  "click",
  () => {
    x.then(({ fact }) => showonDom(fact));
    console.log("hello");
  },
  { signal: evntsignal }
);

let btn1 = document.createElement("button");
btn1.textContent = "cancel click";
document.body.appendChild(btn1);
btn1.addEventListener("click", () => {
  envetController.abort();
});
//!it works same as removeeventlistner;
let p = document.createElement("p");
function showonDom(fact) {
  p.textContent = fact;
  document.body.append(p);
}
