// Problem 1
// Print the numbers from 10 down to 1.

for (i = 10; i >= 1; i--){
    console.log(i);
}

// Problem 2
// Print every third number from 0 to 30.

for (i = 0; i <= 30; i += 3){
    console.log(i);
}

// Problem 3
// Build an array of the first 8 square numbers.

let squares = [];
for (let i = 1; i <= 8; i++) {
    squares.push(i * i);
}
console.log(squares);

// Problem 4
// Print every item in a 2D array.

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < 3; row++){
    for (let col = 0; col < 3; col++){
        console.log(grid[row][col]);
    }
}

// Problem 5
// Count how many numbers in a 2D array are greater than 10.

let grid2 = [
    [1, 12, 3],
    [4, 15, 6],
    [7, 8, 19]
];

for (let row = 0; row < 3; row++){
    for (let col = 0; col < 3; col++){
        if (grid2[row][col] > 10){
            console.log(grid2[row][col]);
        }
    }
} 