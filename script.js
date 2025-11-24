// 1) age limit checker ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let age = 0;
// age = prompt("Enter your age: ");
// if (age < 18){
//     alert("You are a minor")
// }
// else if (age >= 18 && age <= 60){
//     alert("You are an adult")
// }
// else{
//     alert("You are a senior citizen")
// }

// 2) even odd summation checker ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let num1;
// let num2;
// num1 = Number(prompt("enter number one: "));
// num2 = Number(prompt("enter number second: "));
// if ((num1 + num2) % 2 == 0 ){
//     alert("summation is even")
// }
// else{
//     alert("summation is odd")
// }

// 3) character case checker ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let char1 = "A";
// let char3 = "Z"
// let char4 = "a"
// let char2 = "z";
// let char;
// char = prompt("Enter the appropriate character Aa to Zz: " );
// if (char.charCodeAt() < char1.charCodeAt() || (char.charCodeAt() > char3.charCodeAt() && char.charCodeAt() < char4.charCodeAt()) || char.charCodeAt() > char2.charCodeAt()){
//     alert("Invalid Input")
// }
// else if(char.charCodeAt() >= char1.charCodeAt() && char.charCodeAt() <= char3.charCodeAt()){
//     alert("Upper Case Characters")
// }
// else{
//     alert("Lower Case Characters")
// }

// 4) Largest of 3 numbers ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let num1;
// let num2;
// let num3;
// num1 = Number(prompt("enter number one"));
// num2 = Number(prompt("enter number two"));
// num3 = Number(prompt("enter number three"));

// if (num1 > num2 && num1 > num3){
//     alert(num1 + " is greater than other 2 numbers")
// }
// else if(num2 > num1 && num2 > num3){
//     alert(num2 + " is greater than other 2 numbers")
// }
// else{
//     alert(num3 + " is greater than other 2 numbers")
// }


// 5) leap year checker ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let year;
// year = Number(prompt("Enter the valid year"));
// if (year % 400 == 0) {
//     alert(year + " Year is  leap");
// }
// else if (year % 100 == 0 ){
//     alert(year + " Year is not leap");
// }
// else if (year % 4 == 0){
//     alert(year + " Year is leap");
// }
// else{
//     alert(year + " Year is not leap");
// }

// 6) Simple Calculator ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let num1 = Number(prompt("enter num1"));
// let num2 = Number(prompt("enter num2"));
// let operator = (prompt("enter operator(+,-,/,*)"));
// let sum;

// if (operator == '+'){
//     sum = num1 + num2;
//     alert(sum);
// }else if (operator == '-'){
//     sum = num1 - num2;
//     alert(sum);
// }else if (operator == '*'){
//     sum = num1 * num2;
//     alert(sum);
// }else if (operator == '/'){
//     sum = num1 / num2;
//     alert(sum);
// }else if (operator == '%'){
//     sum = num1 % num2;
//     alert(sum);
// }else {
//     alert("Invalid Input");
// }

// 10) multiplication table

// let inputnum = Number(prompt("enter a number which table u want"));
// for (let i = 1 ; i <= 10 ; i++){
//     console.log((i * inputnum));
// } 

// 22) nested condition challenge 

// let age = Number(prompt("Your age"));
// let salary = Number(prompt("Your salary"));
// if(age < 18){
//     console.log("Not eligible");  
// }
// else{
//     if (salary < 20000){
//         console.log("Low Salary: " + salary);
//     }else if (salary > 50000){
//         console.log("High Salary: " + salary);
//     }
//     else{
//         console.log("you are Billionare: " + salary)
//     }
    
// }
