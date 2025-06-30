function mistake(num3 , num4) {
    sum  = num3 + num4;
    return sum;
}
console.log(mistake(5, 10)); // 15  
console.log(mistake(5)); // NaN

function add(num = 0, num2 = 0) {
    return num + num2;
    
}
console.log(add(5, 10)); // 15
console.log(add(5)); // 

function addnun(num1 ,num6) {
    if (num1 === undefined) {
        num1 = 0;
    }
    if (num6 === undefined) {
        num6 = 0;
    }
    return num1 + num6;
    
}
console.log(addnun(5, 10)); // 15
console.log(addnun(5)); // 5