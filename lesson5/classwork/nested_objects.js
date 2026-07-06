let player = {
    name: "Knight",
    health: 100,
    inventory: {
        weapon: "sword",
        shield: "wooden shield",
        coins: 25
    }
};

console.log(player);
console.log(player.name);
console.log(player.inventory);
console.log(player.inventory.weapon);
console.log(player.inventory.coins);

player.inventory.coins += 10;
console.log("Coins:", player.inventory.coins);

let classroom = {
    teacher: "Mr. Lee",
    students: ["Alex", "Maya", "Liam", "Mr. Cool"]
}

console.log("First student:", classroom.students[0]);

for (let i = 0; i < classroom.students.length; i++){
    console.log(classroom.students[i]);
}