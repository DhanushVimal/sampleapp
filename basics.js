function basics
let x = myFunction(5,5);
document.getElementById('demo').innerHTML = x;

function myFunction(a,b){
    return a * b
}
*/
alert('Kg to pound conversion');
function toPounds (p){
    return 2.20462 * p;
}
document.getElementById('demo').innerHTML = toPounds(80);
*/
Functions Used as Variable Values
alert('Kg to pound conversion');
function toPounds (p){
    return 2.20462 * p;
}
document.getElementById('demo').innerHTML = 'You are ' + '' + toPounds(80); + 'pounds'
*/
Numeric Sort 
var number = [9,7,0,4,5,8];
document.getElementById('demo').innerHTML = number;

function myFunction() {
    number.sort(function(a,b){return a - b});
    document.getElementById('demo').innerHTML = number;
}
*/
Array.filter() 
var numbers = [45, 37, 18, 16, 9, 10];
var over18 = numbers.filter(order);

document.getElementById('demo').innerHTML = over18;

function order(value, index, array) {
    return value < 20;
  }
*/
condition statment 
let hour = 17;
if ( hour >= 6 && hour<= 12) {
    console.log('Good Morning');
}
else if ( hour >= 12 && hour < 18) {
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
}
*/
Switch 
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.getElementById('demo').innerHTML = 'Today is ' + day;
  */