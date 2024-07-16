// Activity 1: For loop ----
for (let i = 1; i < 11; i++) {
  console.log(i);
}

const table = 5;
for (let i = 1; i <= 10; i++) {
  console.log(table, "x", i, "=", table * i);
}

// Activity 2: While loop ----
let num = 1;
let total = 0;
while (num <= 10) {
  total += num;
  num++;
}
console.log(total);

let val = 10;
while (val > 0) {
  console.log(val);
  val--;
}

// Activity 2: Do-while loop ----
var a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);

var factorial = 5;
var d = 1;
var data = 1;
do {
  data = d * data;
  d++;
} while (d <= factorial);
console.log(data);

// Activity 4: Nested loop ----
var star = "";
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

// Activity 5: loop control statements ----
for (let index = 1; index <= 10; index++) {
   if(index === 5){
    continue
   }
    console.log(index);
}

for (let index = 1; index <= 10; index++) {
   if(index === 6){
    break
   }
    console.log(index);
}