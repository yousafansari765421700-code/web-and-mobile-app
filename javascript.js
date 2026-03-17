let item1 = 25;
let item2 = 40;
let item3 = 15;

let totalPrice = item1 + item2 + item3;

console.log("Total Price:", totalPrice);

let price = 200;
let discount = price * 0.10;

let finalPrice = price - discount;

console.log("Discounted Price:", finalPrice);

let amount = 500;
let tax = amount * 0.18;

let totalBill = amount + tax;

console.log("Total Bill with Tax:", totalBill);

let weight = 70; // kg
let height = 1.75; // meters

let bmi = weight / (height * height);

console.log("BMI:", bmi);

let salary = 4000;
let salaryTax = salary * 0.20;

let finalSalary = salary - salaryTax;

console.log("Salary After Tax:", finalSalary);

let r1 = 4;
let r2 = 5;
let r3 = 3;
let r4 = 4;
let r5 = 5;

let average = (r1 + r2 + r3 + r4 + r5) / 5;

console.log("Average Rating:", average);

let orderAmount = 80;
let deliveryCharge = 0;

if (orderAmount < 100) {
  deliveryCharge = 10;
}

let total = orderAmount + deliveryCharge;

console.log("Total with Delivery:", total);

let principal = 1000;
let rate = 5;
let time = 2;

let simpleInterest = (principal * rate * time) / 100;

console.log("Simple Interest:", simpleInterest);

let balance = 1000;
let withdraw = 200;

let remaining = balance - withdraw;

console.log("Remaining Balance:", remaining);

let minutes = 130;

let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log(hours + " hours " + remainingMinutes + " minutes");


let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Login");
}
let age = 16;

if (age < 18) {
  console.log("Access Denied");
} else {
  console.log("Access Granted");
}
let order = 250;
let orderDiscount = 0;

if (order > 200) {
  orderDiscount = order * 0.20;
} else if (order > 100) {
  orderDiscount = order * 0.10;
}

let finalAmount = order - orderDiscount;

console.log("Final Amount:", finalAmount);


let marks = 75;

if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}

let weather = "rainy";

if (weather === "hot") {
  console.log("Drink more water");
} else if (weather === "cold") {
  console.log("Wear warm clothes");
} else if (weather === "rainy") {
  console.log("Carry an umbrella");
} else {
  console.log("Weather normal");
}