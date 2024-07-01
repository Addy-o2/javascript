const accountId = 144553
let accountEmail = "rahul@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" /*this method of creating variable is not correct */
let accountState;

// accountId = 25456 // not allowed because const can neither be redifined nor be updated.


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log([accountId, accountEmail, accountPassword, accountCity, accountState])
// node 01_basics/01_variables.js