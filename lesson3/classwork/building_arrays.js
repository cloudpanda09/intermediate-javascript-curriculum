let numbers = [];
for (let i = 1; i <= 5; i++){
    numbers.push(i);
}
console.log(numbers);

let square = [];
for (let i = 1; i <= 6; i++){
    square.push(i * i);
}
console.log(square );

let scores = [55, 82, 91, 40, 100];
let passing_scores = [];
for (let i = 0; i < scores.length; i++){
    if (scores[i] >= 60) {
        passing_scores.push(scores[i]);
    }
}
console.log(passing_scores);