// Task 4
let arr = [];
let number;
let sum = 0;

const sumInputNumbers = () => {
    do {
        number = prompt("Enter a number:");
        if (number == 0) {
            arr.push(Number(number));
        } else {
            number = Number(number);
            arr.push(number);
        }

    } while (!(isNaN(number)) && number != "" && number != null);
    arr.pop();
    console.log(arr);

    sum = arr.reduce((sum, elem) => sum + elem, 0);

    return sum;
}

console.log(sumInputNumbers());
