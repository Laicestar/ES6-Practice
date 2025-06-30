const ages = [3, 10, 18, 20, 30, 40, 50, 60,];
const ages2 = [5, 15, 25, 35, 45, 55, 65, 75];
const ages3 = [2, 4, 6, 8, 10, 12, 14, 16];
const allages = ages.concat(ages2).concat(5).concat(ages3);
const allages2 = [...ages, ...ages2, ...ages3];
const maximum = Math.max(...allages2);
console.log(maximum);
console.log(allages2);