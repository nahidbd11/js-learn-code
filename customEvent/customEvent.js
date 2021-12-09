let para = document.querySelector("p");

function customEvnt(data) {
  let _customEvent = new CustomEvent("showmessage", {
    detail: {
      data,
    },
  });
  para.dispatchEvent(_customEvent);
}


export { para, customEvnt };
