let a = 10;
let b = 30;
console.log(a + b);

if (a + b < "40") console.log("equal value");
else console.log("Not equal");

let marks = 50;
if (marks > 80) console.log("Distinction");
else if (marks > 60) console.log("1st Divison");
else console.log("Fail");

// find out whether a number is prime or not

// 23 is prime of not

// 23 by 2 = No
// 23 by 3 = No
// 23 by 4
// 23 by 5
// 23 by 6
// 23 by 7
// 23 by 8
// 23 by 9
// 23 by 10
// 23 by 11
// 23 by 12
// 23 by 13

// 1) Start from 2
// 2) Keep Dividing till n-1
// 3) if No numbre divides then prime no. else not a prime no.

let n = 24;
let isPrime = true;

for (let i = 2; i <= n - 1; i++) {
  if (n % i == 0) {
    isPrime = false;
  }
}

if (isPrime) console.log("Number is Prime");
else console.log("Not Prime");

let car = {
  brand: "Honda",
  year: 2020,
  seat: {
    color: "gray",
    fabric: "synthetic",
  },
  drive: function () {
    console.log("drive");
  },
};

// console.log(car.seat.color);
// console.log(car.year);
// car.drive();

console.log(car);

document.getElementById("heading").addEventListener("mouseenter", function () {
  document.getElementById("heading").style.color = "red";
});
