let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(grid)

console.log(grid[0][0]);
console.log(grid[1][2]);

for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[row].length; col++){
        console.log(grid[row][col]);
    }
}

let total = 0;
for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[row].length; col++){
        total += grid[row][col];
    }
}
console.log("Total:", total)