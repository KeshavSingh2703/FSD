// let ar=[1,22,45,67,4,23,5];
// // let new_arr = ar.map((x) => x * 2);
// // console.log(new_arr);

// //let new_ar = ar.filter((x) => x % 2 == 0).map((x) => x * 3);
// let new_ar = ar.reduce((x,y) => x+y,0);
// console.log(new_ar);

const students = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 85 },
    { name: 'David', score: 45 }
];
const totalScore = students
    .filter(student => student.score > 60)   
    .map(student => student.score * 2)       
    .reduce((sum, score) => sum + score, 0);   
console.log(totalScore);