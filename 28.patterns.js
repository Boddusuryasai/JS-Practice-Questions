// Write a program to print the given patterns using the loops-
// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//    *
//    **
//    ***

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//    ***
//    ***
//    ***

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//      *
//     ***
//    *****

// function triangle(){
//     let row = "";
//     for (let i = 1; i <= 3; i++) {
//         row += "*";
//         console.log(row);
//     }
// }
// triangle()

function square(){
    let row = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            row += "*";
        }
        console.log(row);
        row = "";
    }}
square()
 function pyramid(){
    for (let i = 1; i <= 3; i++) {
        let row = "";
        for (let j = 1; j <= 3 - i; j++) {
            row += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
        }
        console.log(row);
       
    }
    
 }
 pyramid()
    
    
    
    
