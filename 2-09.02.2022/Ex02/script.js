// Task 2
const arr = [{
    name: "Roman",
    marks: [10, 9, 10, 9]

}, {
    name: "Petru",
    marks: [7, 7, 8, 5]
}, {
    name: "Alexandru",
    marks: [9, 8, 8, 10]
}, {
    name: "Vasile",
    marks: [6, 7, 5, 8]
}, {
    name: "Dan",
    marks: [9, 9, 8, 8]
}]

let sum = 0;
function f1(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        console.log(`Elevul: ${arr[i].name} Media: ${sum / arr[i].marks.length}`)
        sum = 0;
    }
}
f1(arr);

function f2(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        if (sum / arr[i].marks.length > 5) {
            console.log(`Elevul: ${arr[i].name} Media: ${sum / arr[i].marks.length}`);
        }
        sum = 0;
    }
}
f2(arr);

let x = 0;
let y = 10;
let max;
let min;
function f3(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        let mean = sum / arr[i].marks.length;
        if (mean > x) {
            x = mean;
            max = i;
        }
        if (mean < y) {
            y = mean;
            min = i;
        }
        sum = 0;
    }
    console.log(`Elevul cu cea mai mare medie: ${arr[max].name} Media: ${x}`);
    console.log(`Elevul cu cea mai mica medie: ${arr[min].name} Media: ${y}`);
}
f3(arr);
