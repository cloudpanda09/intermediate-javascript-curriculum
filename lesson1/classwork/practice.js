// Problem 1
// Create variables for a student's name, age, and grade.
// Print a sentence using all 3 variables.

let name = "Alice";
let age = 12;
let grade = 93;

console.log(name, "is", age, "years old and has a grade of", grade);

// Problem 2
// Create a variable for a score.
// Print "Excellent" if the score is at least 90, "Good" if it is at least 70, otherwise print "Practice more".

let score = 96;

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 70) {
    console.log("Good");
} else {
    console.log("Practice more.");
}

// Problem 3
// Create an array of 5 numbers.
// Print every number using a for loop.

numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Problem 4
// Count how many numbers in the array are greater than 10.

let nums = [10, 15, 5, 25, 63, 6]

let count = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
        count++
    }
}
console.log("There are", count, "numbers greater than 10.");

// Problem 5
// Write a function that takes an array and returns the biggest number.

nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function biggest_number(arr) {
    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

console.log(biggest_number(nums2));
