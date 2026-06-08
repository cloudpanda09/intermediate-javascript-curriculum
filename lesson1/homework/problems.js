// Problem 1
// Create variables for your favorite food, favorite color, and favorite number.
// Print them in 3 separate sentences.

let favorite_food = "pasta"
let favorite_color = "purple"
let favorite_number = "10"

console.log("My favorite food is " + favorite_food + ". My favorite color is " + favorite_color + "and my favorite number is " + favorite_number)

// Problem 2
// Create a variable for a number.
// Print whether it is positive, negative, or zero.

let number = 53

if (number > 0) {
    console.log("The number is positive!")
} else if (number == 0) {
    console.log("The number is 0!")
} else {
    console.log("The number is negative!")
}

// Problem 3
// Create an array of 5 animals.
// Print the first animal, last animal, and length of the array.

let animals = ["red panda", "dog", "cat", "hamster", "parakeet"]
console.log(animals[0], animals[4])

// Problem 4
// Find the sum of all numbers in the array.

let numbers = [1, 2, 3, 4, 5]

let count = 0
for (i = 0; i < numbers.length; i++) {
    count = count + numbers[i];
}

console.log(count)

// Problem 5
// Write a function that counts how many times "red" appears in an array.

let colors = ["red", "green", "blue", "yellow", "red"]

function find_red(colors) {
    let count = 0;

    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === "red") {
            count++
        }
    }
    return count;
}

console.log(find_red(colors));