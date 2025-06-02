// // function addNum(...numbers){
// //     let sum=0;
// //     for(let i=0;i<numbers.length;i++){
// //         sum+=numbers[i];
// //     }
// //     return sum;
// // }

// // console.log(addNum(1,2,3,4,5,6,7,8,9,10)); //15

// //primitive boolean
// let a=true;
// console.log(a)

// //boolean oject: avoid 
// let bool = new Boolean();
// let trueBool = new Boolean(true)
// console.log(bool)

// //toString()
// console.log(a.toString());

// //valueOf()
// console.log(bool.valueOf())
// console.log(trueBool.valueOf())


// //Number Object
// let num1 = 123;
// let num2 = Number("123")

// //properties and methods.

// //properties
// // MAX_VALUE
// // MIN_VALUE
// // POSITIVE_INFINITY
// // NEGATIVE_INFINITY
// // NaN
// // EPSILON

// //implementation
// console.log(Number.MAX_VALUE)


//methods
/* 
isNan() -> checks Number or not
isFinite() -> checks if value is finite
isInteger() -> checks if value is integer(no decimal point)
parseInt() -> converts data into Integer
parseFloat() -> converts data into Floats


*/
// console.log(isNaN("dinesh"))
// console.log(isFinite(Infinity))
// console.log(parseInt("ab12")) //
// console.log(parseFloat(100.23))

//Math object


//Properties
console.log(Math.PI)
console.log(Math.E)

//methods
/* 
abs() -> returns absolute value
ceil() -> to upper number
floor() -> lower number
round() -> basic mathematics round off
max() -> max among passed parameter[numbers]
min() -> min among passed parameter[numbers]
pow(2,3)-> number to the power of
sqrt() -> returns square root
random() -> random number between 0 and 1
trunc() -> return non decimal part[integer]
sign() -> sign of number
toFixed() -> fix number length [number object]
*/

console.log((Math.random())*1000)

let number = 123.456700099999990909
console.log(number.toFixed())


/*Write a program to calculate the area of circle taking radius
from user and fix the result to 2 decimal place usinf math and number
object's method and properties
*/

/*
Create a function otpGenerator() that generated six digit otp
using math and number object's method and properties
*/

/* Create a 6 sided dice roll that returns a random number from 1 to 6*/










