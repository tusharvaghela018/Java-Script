// conversion into the Number

// let score = 33
let score = "33";
// console.log(typeof score);
// console.log(typeof(score)) //these both are the same.
let valueInNumber = Number(score); // this will convert the string into the number
// console.log(typeof valueInNumber);

let score1 = "33abc";
let valueInNumber1 = Number(score1);
// console.log(valueInNumber1); // this will give the NaN(not a number) because there is some character is also there.

let score2 = null;
let valueInNumber2 = Number(score2); // this will convert the null into the 0.
// console.log(valueInNumber2); // print 0.

let score3 = true;
let valueInNumber3 = Number(score3); /*this will convert the true into 1
if there is false then convert false into the 0.*/
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
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
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
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************************************ Operations ************************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2); //print 4
// console.log(2-2); //print 0
// console.log(2*2); //print 4
// console.log(2**2); //print 4; 2 to power 2;
// console.log(2/3); // print 0;
// console.log(2%3); //print 2;


let str1 = "hello";
let str2 = "tushar";
let str3 = str1 + str2; // string concatenatio
// console.log(str3); //"hellotushar"

// console.log(1 + "2"); // print 12
// console.log("1" + 2); // print 12
// console.log("1" + 2 + 2); // print 122
// console.log(1 + 2 + "2"); // print 32

// console.log(3 + 4 * 5 % 3); // print 5
/*
=> Multiplication(*), Division(/), and Modulus(%) have the same precedence, and they are evaluated before addition(+).
=> operators with the same precedence are evaluated based on their  associativity, which is left to right for these opeartors.
*/

// console.log((3+4) * 5 % 3); // print 2

// console.log((3 + 4) * (5 % 3)); // print 14

console.log(true); // print true
console.log(+true); // print 1 , unary plus operator(convert true into the number)
// console.log(true+) //this will give the error

console.log(+""); //convert the ""(empty string) to 0.

let num1,num2,num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;

//gameCounter++;
++gameCounter;

console.log(gameCounter);