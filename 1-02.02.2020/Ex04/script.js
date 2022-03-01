// Task 4
const ucFirst = (str) => {
    const upperStr = str[0].toUpperCase() + str.slice(1);
    return upperStr;
}

alert(ucFirst("name"));