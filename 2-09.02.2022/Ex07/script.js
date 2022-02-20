// Task 7
let oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function extract(array, start, end) {
    let newArray = [];
    for (let i = start; i <= end; i++) {
        newArray = newArray.concat(array[i]);
    }
    return newArray;
}

console.log(extract(oldArray, 2, 4));