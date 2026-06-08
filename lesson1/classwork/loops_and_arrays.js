for (let i = 0; i < 5; i++) {
    console.log(i)
}

let count = 1;
while (count <= 4) {
    console.log("Count is", count);
    count++;
}

let colors = ["red", "green", "blue", "yellow"];
console.log(colors);

console.log("First color:", colors[0])
console.log("Second color:", colors[1])

console.log("Length:", colors.length);

for (let i = 0; i < colors.length; i++) {
    console.log("Index", i, "has", colors[i]);
}

colors.push("purple");
console.log("After push:", colors);

let last_color = colors.pop()
console.log("Popped color:", last_color);
console.log("After pop:", colors);