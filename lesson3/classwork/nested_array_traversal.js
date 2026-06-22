let groups = [
    ["Alex", "Maya"],
    ["Liam", "Sophie"],
    ["Noah", "Emma"]
];

console.log(groups);
console.log(groups[0]);
console.log(groups[0][1]);

for (let row = 0; row < groups.length; row++) {
    for (let col = 0; col < groups[row].length; col++){
        console.log(groups[row][col]);
    }
}