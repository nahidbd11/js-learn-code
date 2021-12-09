console.log("working");

let file = new File(["敨汬⁯桴獩椠⁳⁡楦敬"], "test.txt", { type: "text/plain", lastModified: Date.now() });
console.log(file);

let reader = new FileReader();
reader.readAsText(file, "utf-16"); //!by default utf-8 encoding 

reader.onload = function (e) {

    console.log(reader.result);
    let url = URL.createObjectURL(file);
    let link = document.createElement("a");
    link.innerText = this.result;
    link.download = file.name;
    link.href = url
    document.body.appendChild(link);
    URL.revokeObjectURL(file);
}
