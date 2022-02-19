// Task 10
const number = 200;

function dividers(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
}

dividers(number);

