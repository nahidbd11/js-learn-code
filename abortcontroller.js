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
let p = document.createElement("p");
btn.onclick = function () {
  x.then(({ fact }) => showonDom(fact));
};

function showonDom(fact) {
  p.textContent = fact;
  document.body.append(p);
}
