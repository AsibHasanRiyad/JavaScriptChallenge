/*
let myFirstName = "Asib";
let myAge = "24";
let success;
const haveFaithInAllah = true;
console.log(myFirstName, myAge, success, haveFaithInAllah);
console.log(typeof success);
console.log(typeof null);

// Assignment operator
let x = 25;
x += 10;
x -= 10;
x *= 4; //x = x * 4
x++;
x--;
console.log(x);

// comparison operator => output will be true or false => <, >, >= , <=


Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 

const marksWeights = 78;
const marksHeight = 1.69;
const johnsWeights = 92;
const johnsHeight = 1.95;
const marksBMI = marksWeights / marksHeight ** 2;
const johnsBMI = johnsWeights / johnsHeight ** 2;
console.log(marksBMI, johnsBMI);
const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);


const age = 17;
// const isOldEnough = age >= 18;
if (age >= 18) {
  console.log("I am enable for Driving License 🚗");
} else {
  console.log("Not enable");
}


const birthYear = 1998;
let century;
if (birthYear >= 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);
*/

/*
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/
const marksWeights = 78;
const marksHeight = 1.69;
const johnsWeights = 92;
const johnsHeight = 1.95;
const marksBMI = marksWeights / marksHeight ** 2;
const johnsBMI = johnsHeight / johnsHeight ** 2;
if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI}`);
} else {
  console.log(`John's BMI ${johnsBMI} is higher than Mark's BMI ${marksBMI}`);
}
