// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = { // object literal
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // this is a symbol key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) --- this will print the email
// console.log(JsUser["email"]) --- this will also print the email --- this is useful when the key has a space in it
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) --- this will print the value of the symbol key

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) -- this will make the object immutable
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());