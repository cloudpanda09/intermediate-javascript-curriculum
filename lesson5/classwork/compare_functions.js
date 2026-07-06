function increasing(a, b){
    return a - b;
}

function decreasing(a, b){
    return b - a;
}

let numbers = [20, 5, 11, 2];

numbers.sort(increasing);
console.log(numbers);

numbers.sort(decreasing);
console.log(numbers);

function by_length(a, b){
    return a.length - b.length
}

let words = ["watermelon", "kiwi", "apple", "banana"];
words.sort(by_length);
console.log(words);