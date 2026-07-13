function sum_array(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }
    return total;
}

function count_greater_than(numbers, limit){
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] > limit){
            count++;
        }
    }
    return count;
}

let scores = [80, 95, 70, 100, 60];
console.log("Sum:", sum_array(scores));
console.log("Greater than 75:", count_greater_than(scores, 75));