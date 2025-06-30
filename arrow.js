// function double(num) {
//     return num * 2;
    
// }
// const double = function (num) {
//     return num * 2;
// }
const double = (num) => num * 2
const add = (x,y) => x + y;
const sum = (num1, num2) => {
    const sum1 = num1 + num2;
    const difference = num1 - num2;
    const result = sum1 + difference;
    return result;

}
console.log(sum(10, 5)); // 15
console.log(add(25,10));
console.log(double(15)); // 30