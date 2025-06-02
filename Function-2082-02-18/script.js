// // function greet(username){
// //     console.log("Hello "+username)
// // }
// // greet("Dinesh");


// // //function expression
// // let printName = function(username){
// //     console.log(username);
// // }
// // printName("Dinesh")

// // //arrow function
// // let displayName=(userName)=>{
// //     console.log(userName)
// // }
// // displayName("Dinesh");



// //arrow function implementation

// //normal function
// function addNum(a,b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(addNum(3,7))

// //arrow function
// let addNums=(a,b)=>a>b?a:b;
// console.log(addNums(3,4))

// //IIFE-> Immediately Invoked Function Expression
// (function(a,b){
//     return a+b
// })(5);

// //arrow function
// let isEven = (num)=>{
//     return num%2==0
// }

// console.log(isEven(2)) //true


// /*
// assignment 1-> arrow function
// assignment 2-> IIFE
// assignment 4-> function expression
// */

//nested function
function printMessage(message){
    function sayHello(){
        console.log("Hello "+message)
    }
    return sayHello();
}

printMessage("This is me.....")


/*
write a function finalScore that takes two numbers
Inside it define a nested function addBonus(score)
adds 5 bonus marks. Return the final score after 
adding to the total.

50 20
5
*/

 function finalScore(score1,score2){
    function addBonus(score){
        return score + 5;
    }
    let total = score1 + score2;
    return addBonus(total);
}

/* 
Write a fucntion conditionalMath that takes two numbers
and has:
1. a nested function lastDigit(num) thar returns 
the last digit of a number

2. if the last digit of first and second number is same
return their sum

3. if not return their product
-----Example-----
conditionalMath(23,43) // 66
conditionalMath(23,44) // 1012
*/

function conditionalMath(marks1,marks2){
    function lastDigit(num){
        return num%10
    }
    if(lastDigit(marks1)==lastDigit(marks2)){
        return marks1+marks2
    }else{
        return marks1*marks2
    }
}
console.log("Last digits are equal so SUM= "+conditionalMath(23,33));
console.log("Last digit are not equal so Product= "+conditionalMath(23,44));

//function with rest parameter
// // function addNum(...numbers){
// //     let sum=0;
// //     for(let i=0;i<numbers.length;i++){
// //         sum+=numbers[i];
// //     }
// //     return sum;
// // }