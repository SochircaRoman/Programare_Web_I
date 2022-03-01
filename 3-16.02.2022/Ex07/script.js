// Task 7
const externalLinks = document.querySelectorAll('a.externalLinks');
const internalLinks = document.querySelectorAll('a.internalLinks');

for (let item of externalLinks) {
    item.setAttribute("style", "color: blue;");
};

for (let item of internalLinks) {
    item.setAttribute("style", "color: red;");
};