// # primitive
// these datatypes are always call by 
// 7 types : String, Number, Boolean, Bigint, Symbol, Undefined, Null

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);
// console.log(typeof anotherId);


const bigNumber = 34565435766543567541212n
// console.log(typeof bigNumber) // this will print bigint

//reference (Non Primitive)
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
// console.log(typeof heros);

const obj= {
    name : "tushar",
    age : 21,
    rollno : 210170107071,
    city : "Ahmedabad"
}
// console.log(typeof obj);

const myFunction = function(a, b){
    console.log(a + b);
}
// console.log(typeof myFunction)
// myFunction(4,5);