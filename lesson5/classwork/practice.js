// Problem 1
// Create an array of 3 student objects with name and score.
// Print each student's name and score.

let students = [
    {name: "Alice", score: 97},
    {name: "Mira", score: 94},
    {name: "James", score: 89},
]

for (let i = 0; i < students.length; i++){
    console.log(students[i].name, students[i].score);
}

// Problem 2
// Count how many students have a score at least 90.

let counter = 0;
for (let i = 0; i < students.length; i++){
    if (students[i].score >= 90) {
        counter += 1;
    }
}

console.log(counter, "students have a score of at least 90.")

// Problem 3
// Sort an array of numbers from smallest to largest.

let numbers = [5, 27, 43, 2, 85];

numbers.sort((a, b) => a - b);
console.log(numbers);

// Problem 4
// Sort an array of objects by age from youngest to oldest.

let students1 = [
    {name: "Alice", age: 7},
    {name: "Mira", age: 14},
    {name: "James", age: 9},
]

students1.sort((a, b) => a.age - b.age);
console.log(students1)

// Problem 5
// Create an object with another object inside it.
// Print one value from the inside object.

let player = {
    name: "Player 1",
    health: 200,
    inventory: {
        weapon: "axe",
        defense: "shield",
        money: 100
    }
}

console.log(player.inventory.defense);

// Extra Solutions:

// Problem 1
// Create an array of 3 student objects with name and score.
// Print each student's name and score.

let students = [
    { name: "Alex", score: 90},
    { name: "Maya", score: 85},
    { name: "Liam", score: 93}
];

for(let i = 0; i < students.length; i++){
    console.log(students[i].name, students[i].score);
}
// Problem 2
// Count how many students have a score at least 90.

let count = 0;
for(let i = 0; i < students.length; i++){
    if (students[i].score >= 90){
        count++;
    }
}
console.log(count, "students have at least a 90")

// Problem 3
// Sort an array of numbers from smallest to largest.

let numbers = [12, 4, 50, 1, 9];
numbers.sort((a,b) => a - b);
console.log(numbers);

// Problem 4
// Sort an array of objects by age from youngest to oldest.

let people = [
    {name: "Ava", age: 14},
    {name: "Noah", age: 11},
    {name: "Emma", age: 13}
];

people.sort((a,b) => a.age - b.age);
console.log(people);

// Problem 5
// Create an object with another object inside it.
// Print one value from the inside object.

let game = {
    title: "Adventure",
    player: {
        name: "Hero",
        health: 100
    }
};

console.log(game.player.health);