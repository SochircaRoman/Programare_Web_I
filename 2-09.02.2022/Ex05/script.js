// Task 5
let oldArray = [1, 2, 3, 4];

function square(x) {
    return x * x;
}

function convert(fn, array) {
    let newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        newArray = newArray.concat(fn(array[i]));
    }
    return newArray;
}

console.log(convert(square, oldArray));
console.log(oldArray);