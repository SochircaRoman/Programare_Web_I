// Task 17
let person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
}

function getName() {
    return person.name;
}

function getAge() {
    return person.age;
}

function getSalary() {
    return person.salary;
}

function getContactsPhone() {
    return person.contacts.phone;
}

function getContactsEmail() {
    return person.contacts.email;
}

function getAddress() {
    return person.address;
}

console.log(getName());
console.log(getAge());
console.log(getSalary());
console.log(getContactsPhone());
console.log(getContactsEmail());
console.log(getAddress());