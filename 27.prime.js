// Write a program to print all the prime number between 0 to 100 (0 and 100 included).
const prime = [];
for (let i = 2; i <= 100; i++) {
   let result = isPrime(i)
   if(result){
    prime.push(i)
   }
  
}
  function isPrime(num){
    let i = 2;
    while (i < num) {
        if (num % i === 0) {
          return false;
        }
        i++;
      }
      return true;
  }

  console.log(prime)