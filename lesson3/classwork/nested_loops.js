for (let row = 0; row < 3; row++){
    for (let col = 0; col < 4; col++){
        console.log("row", row, "col", col);
    }
}

for (let row = 0; row < 3; row++){
    let line = "";
    for (let col = 0; col < 5; col++){
        line = line + "*";
    }
    console.log(line);
}

let numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbers.length; j++){
        console.log(numbers[i], numbers[j]);
    }
}