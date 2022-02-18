// Task 5
function extractCurrencyValue(str) {
    let value = str.slice(1);
    return Number(value);
}

alert(extractCurrencyValue("$120") === 120);