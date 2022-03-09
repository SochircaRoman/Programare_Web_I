const textArea = document.getElementById("textArea");

textArea.addEventListener("keydown", () => {
    localStorage.setItem("userText", textArea.value);
});

document.addEventListener("DOMContentLoaded", () => {
    textArea.value = localStorage.getItem("userText");
});