// Activity 1: if-else Statement ----
var num1 = 0;
if (num1 > 0) {
  console.log("this number this positive--> ", num1);
} else if (num1 === 0) {
  console.log("this number this Zero--> ", num1);
} else {
  console.log("this number this negative--> ", num1);
}

var age = 17;
if (age >= 18) {
  console.log("Wow your are eligible for vote");
} else {
  console.log("oops! your are not eligible for vote");
}

// Activity 2: Nested if-else Statement ----
const num2 = 42;
const num3 = 1;
const num4 = 5;

if (num2 > num3 && num2 > num4) {
  console.log(num2, "is largest");
} else if (num3 > num2 && num3 > num4) {
  console.log(num3, "is largest");
} else {
  console.log(num4, "is largest");
}

// Activity 3: Switch case Statement ----
const day = 4;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  default:
    console.log("Saturday");
};

var grade = 15;
switch (true) {
  case grade >= 90:
    console.log("Grade--> A");
    break;
  case grade <= 70 && grade >= 56:
    console.log("Grade--> B");
    break;
  case grade <= 55 && grade >= 31:
    console.log("Grade--> C");
    break;
  case grade <= 30 && grade >= 20:
    console.log("Grade--> D");
    break;
  default:
    console.log("Grade--> E");
}

// Activity 4: conditional(ternary) operator ----
var number = 57;
console.log(number%2 === 0 ? "This is evan number":"this is odd number");

// Activity 5: combining conditions ----
const year = 2026;
if(year%4 ===0 && year%100 !== 0 || year%400 === 0){
    console.log("this is leep year");
}
else{
    console.log("this is not leep year");

}
