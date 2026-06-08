console.log("Welcome to intermediate JavaScript!")

let name = "Alex"
let age = 13
let score = 92

let num_string = "42"
let num = Number(num_string)
console.log(num + 8)

let money = 15;
let money_string = String(money);
console.log("You have $" + money_string)

console.log(score > 80);
console.log(score === 92);
console.log(score !== 50);

console.log(5 == "5");
console.log(5 === "5");

if (score >= 90) {
    console.log("A")
} else if (score >= 80) {
    console.log("B")
} else {
    console.log("Keep practicing")
}

let has_homework = true;
let is_weekend = false;

if (has_homework === true && is_weekend === false) {
    console.log("Finish your homework after school")
}

if (score >= 90 || age < 10) {
    console.log("At least one condition is true")
}