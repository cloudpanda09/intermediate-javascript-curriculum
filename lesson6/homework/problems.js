// Problem 1
// Write a function that takes an array and returns the smallest number.

function smallest_number(numbers){
    let smallest = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if (numbers[i] < smallest){
            smallest = numbers[i];
        }
    }
    return smallest;
}

nums = [6, 1, 7, 4, 9];
console.log(smallest_number(nums));

// Problem 2
// Write a function that takes an object with price and quantity.
// Return the total cost.

function total_cost(item){
    return item.price *  item.quantity;
}

console.log(total_cost({name: "apple", price: 2, quantity: 5}));

// Problem 3
// Write a function that returns an object with total and average for an array.

function make_result(numbers){
    let total = 0

    for (let i = 0; i < numbers.length; i++){
        total = total + numbers[i]
    }

    return {
        total: total,
        average: total / numbers.length
    }
}

let nums2 = [5, 2, 6, 3, 8];
console.log(make_result(nums2));

// Problem 4
// Write a helper function is_long_word.
// Use it to count how many words have more than 5 letters.

function is_long_word(word){
    return word.length > 5;
}

function count_long_words(words){
    let counter = 0;
    for (let i = 0; i < words.length; i++){
        if (is_long_word(words[i]) == true){
            counter += 1;
        }
    }
    return counter
}

let fruits = ["apple", "banana", "strawberry", "cherry", "orange", "kiwi"];
console.log(count_long_words(fruits));

// Problem 5
// Write a function that takes an array of products and returns the total price.

let products = [
    {name: "pencil", price: 1},
    {name: "notebook", price: 3},
    {name: "backpact", price: 25}
]

function total_price(products){
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total = total + products[i].price;
    }
    return total;
}

console.log(total_price(products));