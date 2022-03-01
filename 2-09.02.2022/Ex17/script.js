// Task 17
let person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova",

    get name() {
        return this.name;
    },

    get age() {
        return this.age;
    },

    get salary() {
        return this.salary;
    },

    get phone() {
        return this.contacts.phone;
    },

    get email() {
        return this.contacts.email;
    },

    get address() {
        return this.address;
    }
}