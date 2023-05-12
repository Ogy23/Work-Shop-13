// 1. Is Truthy

// const IamAString = 'I am a String';

// if (IamAString) {
//     console.log(true);
// }

// const falsy = false

// if (falsy == false) {
//     console.log('The Boolean value false is falsy')
// }

// else{
//     console.log(true)
// }

// const nullf = null

// if (nullf == null) {
//     console.log('The null value is falsy')
// }

// else{
//     console.log(true)
// }

// const undefinedu = undefined

// if (undefinedu == undefined) {
//     console.log('undefined is falsy')
// }

// else{
//     console.log(true)
// }

// const number = 0

// if (number == 0) {
//     console.log('The number 0 is falsy (the only falsy number)')
// }

// else{
//     console.log(true)
// }

// const empty = ''

// if (empty == false){
//     console.log('The empty string is falsy (the only falsy string)')
// }

// else{
//     console.log(false)
// }

// 2. Number Line 

// let num1 = -5;
// let num2 = 0;
// let sum = num1 + num2;

// if (sum < -1000) {
//     console.log(sum + " is less than -1000");
//   } else if (sum < 0) {
//     console.log(sum + " is a negative number");
//   } else if (sum === 0) {
//     console.log(sum + " is equal to 0");
//   } else if (sum > 0 && sum <= 100) {
//     console.log(sum + " is larger than 0");
//   } else {
//     console.log(sum + " is greater than 100");
//   }

// 3. Greater or Equal to 5

// let num1 = 5;
// let num2 = 5;
// let sum = num1 + num2;

// if (num1 >= 5 && num2 >= 5) {
//     console.log("true");
// } 

// else {console.log ("false")}

// 4. Pair and Compare

let param1A = "cake";
let param1B = "cake";
let param2A = "pie";
let param2B = "pie";
  
if (param1A === param1B || param2A === Number(param2B)) {
    console.log(true);
  } else {
    console.log(false);
  }