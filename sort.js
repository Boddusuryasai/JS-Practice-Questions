// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a,b)=>a-b);
console.log(`Sorted array ${ages}`);
console.log(`MIN AGE IS : ${ages[0]}`);
console.log(`MAX AGE IS : ${ages[ages.length-1]}`);
console.log(`median is  ${ages[Math.ceil((ages.length-1)/2)]}`);
let sum = ages.reduce((prev=0 , curr)=>{
              return prev+=curr
});
console.log(sum/(ages.length));
const range = ages[ages.length-1]-ages[0];
console.log(`Range is ${range}`);
const min = Math.min(...ages);
const max = Math.max(...ages);
const minDiff = Math.abs(min - sum/(ages.length));
const maxDiff = Math.abs(max - sum/(ages.length));

console.log(minDiff, maxDiff);
