let numbers = [5, 12, 1, 40, 7];
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

numbers.sort((a, b) => a * a)
console.log(numbers);

let words = ["banana", "apple", "pear", "grape"];
words.sort();
console.log(words);

words.reverse();
console.log(words);