const { type } = require("jquery");

let age = 29;
console.log(age, typeof age);
age = "29";
console.log(age, typeof age);
age = null;
console.log(age, typeof age);

let ageOfPerson1 = 18;
let ageOfPerson2 = "20";

ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = "Charlie";

nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = "JavaScript";
const bestProgrammingLanguage2 = "Java";

bestProgrammingLanguage2 = bestProgrammingLanguage1;
console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = 0;

initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

var isJavaScriptProgrammer1 = true;
var isJavaScriptProgrammer2 = false;

isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(
  "var устарел древний мамонт скам",
  isJavaScriptProgrammer2,
  typeof isJavaScriptProgrammer2
);

let helloText1 = "Hello!";
let helloText2 = "Привет!";


