// Task 8
let username = "Roman";
let password = "1234";

const submitButton = document.getElementById("submit");
const receivedUsername = document.getElementById("username");
const receivedPassword = document.getElementById("password");

submitButton.addEventListener("click", () => {
    if (receivedUsername.value == username && receivedPassword.value == password) {
        alert("Hi Roman!");
    } else if (receivedUsername.value == username && receivedPassword.value != password) {
        alert("Incorrect password!");
    } else if (receivedUsername.value != username && receivedPassword.value == password) {
        alert("Incorrect username!");
    } else {
        alert("Validation error!");
    }
});