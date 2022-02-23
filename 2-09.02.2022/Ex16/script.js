// Task 16
let arr = [[1, 2], [3, 4], [null, 4], [3, undefined]];

function f1(array) {
    let newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        if (typeof (array[i][0]) == "number" && typeof (array[i][1]) == "number") {
            newArray.unshift(array[i]);
        }
    }
    return newArray;
}

console.log(f1(arr));