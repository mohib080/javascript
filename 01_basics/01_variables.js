const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed);


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // ✅ Works, x is function-scoped
}

function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // ❌ Error, y is block-scoped
}
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])