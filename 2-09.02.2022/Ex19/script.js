// Task 19
const weekDays = {
    "Luni": "Mo",
    "Marti": "Tu",
    "Miercuri": "We",
    "Joi": "Th",
    "Vineri": "Fr",
    "Sambata": "Sa",
    "Duminica": "Su",
};

function castling(obj) {
    const newObj = {};

    const keys = Object.keys(weekDays);
    const values = Object.values(weekDays);

    for (let i = 0; i <= 6; i++) {
        newObj[values[i]] = keys[i];
    }
    return newObj;
}

console.log(castling(weekDays));