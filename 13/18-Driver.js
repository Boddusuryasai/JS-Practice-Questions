// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let btn =  document.getElementById("btn");
btn.onclick = function(){
  let a =  prompt("Enter your age:");
  a>18?alert('You are old enough to drive'):alert("Wait for the number of years he needs to turn 18.")
  

}