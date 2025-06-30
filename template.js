const firstname = 'John';
const lastname = 'Doe';
const age = 30;
const fullname = firstname + ' ' + lastname + ' is ' + age + ' years old.';
const template = `My name is ${firstname} ${lastname} and I am ${age} years old.`;
const enterline = "hello "+
"my name is"  
+ "John Doe" ;
const multiline = `hello
my name is ${firstname} ${lastname} and I am ${age} years old.`;
console.log(multiline); // hello
console.log(enterline); // hello my name is John Doe and I am 30 years old.
console.log(template); // My name is John Doe and I am 30 years old.
console.log(fullname); // John Doe is 30 years old.