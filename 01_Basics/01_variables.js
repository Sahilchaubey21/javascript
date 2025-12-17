const accountId = 1235895
let accountEmail = "sahilch@gmail.com"
var accountPassword = "1234432"
accountCity = "Noida"

// accountId = 1145 It is not possible to assign any value again to the constant variable

accountEmail = "sc@gmail.com"
accountPassword = "1255"
accountCity = "Delhi"
let accountState;

console.log(accountEmail)

console.table([accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use the var beacuse of issue in block scope and functional scope
*/