//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30 // var is function scoped
    // console.log("INNER: ", a); -- output: 10

}



// console.log(a); -- output: 300
// console.log(b);
// console.log(c); -- output: 30


function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username); // hites
    }
    // console.log(website); -- output: ReferenceError: website is not defined

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); -- output: hitesh youtube
    }
    // console.log(website); -- output: ReferenceError: website is not defined
}

// console.log(username); -- output: ReferenceError: username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num) {
    return num + 1
}



addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization -- hoisting
const addTwo = function (num) {
    return num + 2
}
