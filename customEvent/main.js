import * as Evnt from "./customEvent.js";

console.log(Evnt.para);
let btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  Evnt.customEvnt({
    name: [
      "six",
      "four",
      "single",
      "double",
      "dot",
      "wicket",
      "wideball",
      "noball",
    ],
  });
});

function addclass(classname = null) {
  Evnt.para.classList.add(classname);
}

Evnt.para.addEventListener("showmessage", (e) => {
  Evnt.para.setAttribute("class", "lead display-1");
  let { name, abstract } = e.detail.data;
  //   console.log(name.length);
  let indexOfName = Math.floor(Math.random() * name.length);
  Evnt.para.textContent = `this will be a ${name[indexOfName]} `;

  if (name[indexOfName] == "six" || name[indexOfName] == "four") {
    addclass("text-success");
  } else if (name[indexOfName] == "wicket") {
    addclass("text-danger");
    console.log("hello");
  }
});
