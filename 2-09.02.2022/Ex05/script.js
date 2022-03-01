// Task 5
const oldArray = [1, 2, 3, 4];

const square = (x) => x * x;

const convert = (fn, array) => {
    let newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        newArray = newArray.concat(fn(array[i]));
    }
    return newArray;
}

console.log(convert(square, oldArray));
console.log(oldArray);