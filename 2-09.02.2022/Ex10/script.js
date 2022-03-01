// Task 10
let array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

const uniqueSorted = (arr) => {
    let x = [...new Set(arr)];
    x.sort();
    array = x;
    return array;
}

console.log(uniqueSorted(array));
console.log(array);