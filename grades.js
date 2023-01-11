// Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

function grades(marks){

    marks>=80&&marks<=100?console.log("A"):marks>=70&&marks<=89?console.log("B"):marks>=60&&marks<=69?console.log("c"):marks>=50&&marks<=59?console.log("D"):console.log("F");

}
grades(57)