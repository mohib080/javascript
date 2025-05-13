// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) -- adds to the beginning of the array
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() -- converts to string
// const newArr = myArr.join(" - ") -- converts to string with separator
// const newArr = myArr.concat(myHeors) -- combines two arrays
// const newArr = myArr.concat(myHeors, 1, 2, 3) -- combines two arrays with additional values
// const newArr = myArr.concat(myHeors, [1, 2, 3]) -- combines two arrays with additional array
// const newArr = myArr.concat(myHeors, [1, 2, 3], 4) -- combines two arrays with additional array and value

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3)

console.log(myn1); // slice does not change the original array --- [1, 2]
console.log("B ", myArr); // original array is unchanged

const myn2 = myArr.splice(1, 3) // splice changes the original array
console.log("C ", myArr);
console.log(myn2); // splice returns the removed elements-- [1, 2, 3]
