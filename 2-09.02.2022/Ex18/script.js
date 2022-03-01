// Task 18
const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Среда",
    "We": "Вторник",
    "Th": "Четверк",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
};

const arr = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
const translate = (obj) => {
    const keys = Object.keys(weekDays);
    for (let i = 0; i <= arr.length - 1; i++) {
        weekDays[keys[i]] = arr[i];
    }
}

translate(weekDays);
console.log(weekDays);