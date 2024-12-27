
//here we learn about the all keyword's scopes
//which one is use for the local scope, block scope and the global scope ?
const accountId  = 144553;

let accouEmail = "123@gmail.com";

var accountPassword = "12345";

accountCity = "jaipur";

let accountState;

// accountId = 2; //not allowed -> it will give the error while we run our .js code because we declared accountId with const keyword and it cant be change after once it declared.

accountEmail = "tcv@gmail.com";
accountPassword = "678910";
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // it will show all the values in te form of the table.

/*
prefer not use var
because issue in block scope an functional scope
*/
