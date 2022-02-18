// Task 2
let arr = [0, 100];
let sum = 0;

for (let i = arr[0]; i <= arr[1]; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);
alert(sum);