// Task 1
document.querySelector("body").style.backgroundColor = "red";

// Task 2
setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "green";
}, 3000);

// Task 3
document.getElementById("btnOrange").addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "Orange";
});

// Task 4
const listOfElements = document.getElementById("listOfElements");
let val = 1;

let interval = setInterval(() => {
    if (val <= 20) {
        if (val % 2 == 0) {
            const x = listOfElements.appendChild(document.createElement("li"));
            x.innerHTML = "Elementul " + val;
            x.style.backgroundColor = "green";
        } else {
            const x = listOfElements.appendChild(document.createElement("li"));
            x.innerHTML = "Elementul " + val;
            x.style.backgroundColor = "purple";
        }
        val++;
    } else {
        clearInterval(interval);
    }
}, 2000);