// Task 7
let externalLinks = document.querySelectorAll('a.externalLinks');
let internalLinks = document.querySelectorAll('a.internalLinks');

for (let item of externalLinks) {
    item.setAttribute("style", "color: blue;");
};

for (let item of internalLinks) {
    item.setAttribute("style", "color: red;");
};