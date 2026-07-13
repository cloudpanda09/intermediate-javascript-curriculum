// Problem 1
// Write a function that takes an array and returns the sum.

function array_sum(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }
    return total;
}

let scores = [52, 24, 74, 3, 91];
console.log("Sum of scores:", array_sum(scores));

// Problem 2
// Write a function that takes an object with name and score.
// Return true if the score is at least 70.

function make_student(name, score){
    let student = {
        name: name,
        score: score
    };
    return student;
}

function score(student){
    if (student.score >= 70){
        return true
    }
}

let student1 = make_student("Maya", 87);
console.log("Student passing course:", score(student1));

// Problem 3
// Write a function that returns an object with a name and age.

function make_person(name, age){
    return {
        name: name,
        age: age
    };
}

console.log(make_person("Maya", 12));

// Problem 4
// Write a helper function is_vowel.
// Use it to count vowels in a word.

function is_vowel(ch){
    return "aeiou".includes(ch);
}

function count_vowels(word){
    let count = 0;
    for (let i = 0; i < word.length; i++){
        if (is_vowel(word[i])){
            count++;
        }
    }
    return count;
}

console.log(count_vowels("banana"));

// Problem 5
// Write a function that takes an array of objects and returns the object with the highest score.

function best_student(students){
    let best = students[0];
    for (let i = 0; i < students.length; i++){
        if(students[i].score > best.score){
            best = students[i];
        }
    }
    return best;
}

let students = [
    {name: "Alex", score: 92},
    {name: "Maya", score: 99},
    {name: "Liam", score: 85}
];

console.log(best_student(students));