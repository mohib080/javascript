const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //bad practice

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// string interpolation, backticks

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // -hc-com

const newStringOne = "   hitesh    "
console.log(newStringOne); // "   hitesh    "
console.log(newStringOne.trim()); // "hitesh"

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar')) // false

console.log(gameName.split('-')); // [ 'hitesh', 'hc', 'com' ]