// conversion into the Number

// let score = 33
// let score = "33";
// console.log(typeof score);
// // console.log(typeof(score)) these both are the same.
// let valueInNumber = Number(score); // this will convert the string into the number
// console.log(typeof valueInNumber);

// let score1 = "33abc";
// let valueInNumber1 = Number(score1);
// console.log(valueInNumber1); // this will give the NaN(not a number) because there is some character is also there.

// let score2 = null;
// let valueInNumber2 = Number(score2); // this will convert the null into the 0.
// console.log(valueInNumber2); // print 0.

// let score3 = true;
// let valueInNumber3 = Number(score3); /*this will convert the true into 1
// if there is false then convert false into the 0.*/
// console.log(valueInNumber3);

//notes
/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
*/


// conversion into the boolean
// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//notes
/*
1 => true
0 => false
"" => false (empty string)
"tushar" => true
*/


//conversion into the string
let someNumber = 33;
let stringNumber = String(someNumber); // this will convert the someNumber into the string
console.log(stringNumber);
console.log(typeof stringNumber);