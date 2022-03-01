// Task 8
const btnPush = document.getElementById("btnPush");
const inputText = document.getElementById("inputText");
const listOfElements = document.getElementById("listOfElements");

btnPush.addEventListener("click", () => {
    const data = inputText.value;
    inputText.value = "";
    if (data != "") {
        const x = listOfElements.appendChild(document.createElement("li"));
        x.innerHTML = data;
        x.id = "text";
    };
});

listOfElements.addEventListener("click", () => {
    //alert(listOfElements);
});