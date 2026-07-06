// Problem 1
// Create an array of product objects with name and price.
// Print each product.

let products = [
    {product: "strawberry", price: 3},
    {product: "milk", price: 4},
    {product: "orange", price: 2},
    {product: "apple", price: 1}
]

for (let i = 0; i < products.length; i++){
    console.log(products[i].product, products[i].price);
}

// Problem 2
// Find the most expensive product.

products.sort((a, b) => b.price - a.price);

console.log(products[0]);

// Problem 3
// Sort an array of numbers from largest to smallest.

let numbers = [3, 74, 23, 6, 53];

numbers.sort((a, b) => b - a);
console.log(numbers)

// Problem 4
// Sort an array of words by length.

let words = ["banana", "orange", "apple", "strawberry", "milk"];
words.sort((a, b) => a.length - b.length);
console.log(words);

// Problem 5
// Sort an array of movie objects by year from oldest to newest.

let movie = [
    {product: "Harry Potter", year: 2001},
    {name: "Home Alone", year: 1990},
    {name: "Top Gun", year: 1986},
]

movie.sort((a, b) => a.year - b.year);
console.log(movie)