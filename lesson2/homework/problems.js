// Problem 1
// Create a word.
// Print the first 3 letters and the last 3 letters.

let word = "telephone"
let firstThree = word.slice(0, 3);
let lastThree = word.slice(-3)

console.log(firstThree, lastThree)

// Problem 2
// Create a sentence.
// Print true if it contains the word "code".

let sentence = "JavaScript is fun";

if (sentence.includes("code") == true) {
    console.log("Includes code");
} else {
    console.log("Doesn't include code")
}

// Problem 3
// Count how many times the letter "e" appears in a word.

let count = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] == "e") {
        count += 1;
    }
}
console.log(count)

// Problem 4
// Build a new string that contains only the consonants from a word.

let consonants = ""

for (let i = 0; i < word.length; i++) {
    let l = word[i];
    if (l !== "a" && l !== "e" && l !== "i" && l !== "o" && l !== "u") {
        consonants += l
    }
}
console.log(consonants);

// Problem 5
// Reverse a string using a loop.

 let reverse_string = "";

 for (let i = word.length - 1; i >= 0; i--) {
    reverse_string += word[i];
 }

 console.log(reverse_string);