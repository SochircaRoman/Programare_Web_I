// Task 7
const oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const extract = (array, start, end) => {
    let newArray = [];
    for (let i = start; i <= end; i++) {
        newArray = newArray.concat(array[i]);
    }
    return newArray;
}

console.log(extract(oldArray, 2, 4));