let students = [
    {name: "Alex", score: 92},
    {name: "Maya", score: 87},
    {name: "Liam", score: 75},
    {name: "Sophie", score: 98}
];

students.sort((a, b) => a.score - b.score);
console.log(students)

students.sort((a, b) => b.score - a.score);
console.log(students);

students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);

for(var i = 0; i < students.length; i++){
    console.log(students[i].name, students[i].score);
}