const inputEvents = document.getElementById("inputEvents");
const pushBtn = document.getElementById("pushBtn");
const listOfElements = document.getElementById("listOfElements");
const delBtn = document.getElementById("delBtn");


document.addEventListener("DOMContentLoaded", () => {
    val = localStorage.getItem("val");
    for (let i = 0; i < val; i++) {
        const elem = listOfElements.appendChild(document.createElement("li"));
        elem.innerHTML = localStorage.getItem(`${i}`);
        button = elem.appendChild(document.createElement("button"))
        button.innerHTML = "del";
        button.setAttribute("id", `delBtn${i}`);
        button.setAttribute("num", `${i}`);
    }
});

pushBtn.addEventListener("click", () => {
    val = localStorage.getItem("val");
    localStorage.setItem(`${val}`, inputEvents.value);
    const elem = listOfElements.appendChild(document.createElement("li"));
    elem.innerHTML = localStorage.getItem(`${val}`);
    button = elem.appendChild(document.createElement("button"))
    button.innerHTML = "del";
    button.setAttribute("id", `delBtn${i}`);
    button.setAttribute("num", `${val}`);
    val++;
    localStorage.setItem("val", val);

});

delBtn.addEventListener("click", () => {
    console.log("clicl");
    num = delBtn.getAttribute("num");
    localStorage.removeItem(`${num}`);
});