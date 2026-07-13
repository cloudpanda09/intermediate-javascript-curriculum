function make_student(name, score){
    let student = {
        name: name,
        score: score
    };
    return student;
}

let student1 = make_student("Alex", 92);
let student2 = make_student("Maya", 87);

console.log(student1);
console.log(student2);

function make_result(total, average){
    return {
        total: total,
        average: average
    }
}

let result = make_result(270, 90);
console.log("Total:", result.total);
console.log("Average:", result.average);