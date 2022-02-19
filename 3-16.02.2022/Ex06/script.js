// Task 6
let impar = document.querySelectorAll('td.impar');
let par = document.querySelectorAll('td.par');


for (let item of impar) {
    item.setAttribute("bgcolor", "aquamarine");
};

for (let item of par) {
    item.setAttribute("bgcolor", "chocolate");
};
