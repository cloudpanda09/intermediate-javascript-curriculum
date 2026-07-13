function print_person(person){
    console.log(person.name, "is", person.age, "years old.");
}

function birthday(person){
    person.age++;
    return person;
}

let student = {
    name: "Alex",
    age: 13
}

print_person(student);
student = birthday(student);
print_person(student);

function get_score(student){
    return student.score;
}

let player = {
    name: "Maya",
    score: 98
}

console.log("Score:", get_score(player));