// Task 9
const arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, "word", 7, 8, false, 9, 100];

function filter(arr) {
    let x = [];
    arr.forEach(element => {
        if (!(isNaN(Number(element))) && element != null && element != false) {
            x = x.concat(element);
        }
    });
    return x;
}

console.log(filter(arr));