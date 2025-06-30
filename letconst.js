const name = 'John';
let age = 30;
age = 31; // This is allowed since age is declared with let
// name = 'Doe'; This will throw an error since name is declared with const
console.log(name); // John
console.log(age); // 30
// const array = [1, 2, 3, 4, 5];
// array.push(6); // This is allowed since array is mutable
// console.log(array); // [1, 2, 3, 4, 5

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log(sum); // 45
