let animals = ["cat", "dog", "cat", "tiger", "cat"];

let found = false;
for (let i = 0; i < animals.length; i++) {
    if(animals[i] === "dog"){
        found = true;
    }
}
console.log("Found dog:", found);

let counter = 0;
for (let i = 0; i < animals.length; i++){
    if (animals[i] === "cat"){
        counter++;
    }
}
console.log(counter, "cats");

let numbers = [4, 12, 7, 20, 3];

let total = 0;
for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
}
console.log("Total:", total);

let biggest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > biggest) {
        biggest = numbers[i];
    }
}

console.log("Biggest:", biggest);

function add_numbers(a, b) {
    return a + b;
}

function count_above_ten(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 10) {
            count++;
        }
    }
    return count
}

console.log(add_numbers(3, 8));