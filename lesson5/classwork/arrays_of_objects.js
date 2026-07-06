let students = [
    {name: "Alex", score: 92},
    {name: "Maya", score: 87},
    {name: "Liam", score: 75},
    {name: "Mr. Failure", score: 20}
]

console.log(students);
console.log(students[0]);
console.log(students[0].name);
console.log(students[0].score);

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name, "passed")
}

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 50) {
        console.log(students[i].name, "passed");
    }
}