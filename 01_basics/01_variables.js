const accoundId = 144553;
let accountEmail = "nilesh@google.com";
var accountPassword = "12345";
accountCity = "Patna";
let accountState;

// accoundId = 2  // not allowed

// Scope : {}

accountEmail = "n@gmail.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accoundId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accoundId, accountEmail, accountPassword, accountCity, accountState]);
