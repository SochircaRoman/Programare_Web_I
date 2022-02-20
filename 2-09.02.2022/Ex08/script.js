// Task 8
const colors = ["red", "green", "blue"];

function checkColor(color) {
    return colors.findIndex(element => element === color);
}

console.log(checkColor("green"));