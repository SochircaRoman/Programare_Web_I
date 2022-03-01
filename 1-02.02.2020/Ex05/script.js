// Task 5
const extractCurrencyValue = (str) => {
    let value = str.slice(1);
    return Number(value);
}

alert(extractCurrencyValue("$120") === 120);