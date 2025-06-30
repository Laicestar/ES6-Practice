const person = {
    name: "Md Mahim Islam",
    age: 30,
    location: "Bangladesh",
    phone : "01700000000",
    frinds: ["John", "Siam", "Jim"],
    job: "student",
}
const { name, age, location, phone, frinds, job } = person;

console.log(phone); // "01700000000"
console.log(age);
console.log(name, age , location, job); // "Md Mahim Islam"
console.log(frinds); // ["John", "Siam", "Jim"]

const bestFriends = ['alif', 'sami', 'samiul', 'samiul islam'];
const[first ] = bestFriends;
const [first2, ...rest] = bestFriends;
console.log(first);
console.log(first2, rest); // "alif"


const complexObject = {
    name: " Md Robiul Islam Ayaan",
    info: {
        Age: "20",
        location: "Dhaka"
    }
}
const { Age } = complexObject.info;
console.log(Age);