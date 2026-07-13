function is_even(num){
    return num % 2 == 0;
}

function count_evens(numbers){
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        if(is_even(numbers[i])){
            count++;
        }
    }
    return count;
}

let nums = [1, 2, 3, 4, 5, 6];
console.log("Evens:", count_evens(nums));

function get_average(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total/numbers.length;
}

function is_above_average(num, numbers){
    return num > get_average(numbers);
}

console.log(is_above_average(90, [70, 80, 90]));