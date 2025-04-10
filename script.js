
//                                     Q1 Add these two numbers

let a=50;
let b=20;
console.log(a+b) // output 70

//                                    Q2 Find if the conditions are obeyed or not? 
let a1=20;
let b1=10;
if (a1>b1)console.log("true");
else{
    console.log("false"); // output true
}

//                                    Q3 Check the conditions

//You are given two numbers A� and B�. You need to do the following checks: 
// 1. if both are divisible by 10 console true. 
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true. 
 
// Use operator to do this. 
// Note: You have to complete Check function. No need to take any input. 
    
function check(x,y) {
    console.log(x % 10 == 0 && y % 10 == 0); //  true 
    console.log(x % 10 != 0 && y % 10 != 0);//  false
    console.log(x % 10 == 0 || y % 10 == 0);//  true
  }
  check(20,40)

  //                              Q4 Find the first digit of a 4 digit number 

let c=5039;
result=Math.floor(c/1000);
console.log(result); //output 5

//                                   Q5.Find the last digit of a 4 digit number 

let d=5039;
result=Math.floor(d%10);
console.log(result); // output 9 

//                                   Q6 Find the remainder using function

function find_the_remainder(dividend, divisor) {
    return dividend % divisor;
  }  
console.log(find_the_remainder(17, 5)); // output 2

//                           Q7.Multiply two Numbers 

function Multiply_two_numbers(x,y){
    return x*y;
}
console.log(Multiply_two_numbers(6,5)); //output 30

 

 //                          Q8 Marks Calculator sum and average

 
let p=90;
let q=70;
let r=85;
console.log((p+q+r));
console.log((p+q+r)/3);
 




























































