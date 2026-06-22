// Problem 1
// Print all odd numbers from 1 to 19.

for (i = 1; i <= 19; i += 2){
    console.log(i);
}

// Problem 2
// Print a triangle of stars with 5 rows.

for (let row = 1; row <= 5; row++) {
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += "*";
    }
    console.log(stars);
}

// Problem 3
// Build an array with the numbers 5, 10, 15, 20, 25.

let array = [];

for (i = 5; i <= 25; i += 5){
    array.push(i);
}
console.log(array);

// Problem 4
// Find the sum of all numbers in a 2D array.

let two_d_array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
]

let total = 0;
for (let row = 0; row < 2; row++){
    for (let col = 0; col < 4; col++){
        total += two_d_array[row][col];
    }
}
console.log("Total:", total)

// Problem 5
// Build a new array with only numbers less than 50.

let two_d_array2 = [
    [1, 62, 43, 84],
    [35, 56, 17, 98]
]
let less_than_50 = []

for (let row = 0; row < 2; row++){
    for (let col = 0; col < 4; col++){
        if (two_d_array2[row][col] < 50) {
            less_than_50.push(two_d_array2[row][col]);
        }
    }
}
console.log("Numbers less than 50:", less_than_50);