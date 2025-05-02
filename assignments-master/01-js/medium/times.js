/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// function calculateTime(n) {
//     let sum = 0;
//     for(let i=0; i<n; i++){
//         // sum+=i;
//         sum = sum + i;
//     }
//     return sum;
// }
// const start = new Date();
// const ans = calculateTime(100);
// console.log(ans);
// const end = new Date();
// console.log(end-start); 


const start = Date.now();
const currentDate = new Date();
const st1 = currentDate.getTime();

// console.log(`Current Time:, ${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`);
// getTime() -> Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
console.log(currentDate.getTime()+" milliseconds")
console.log((ss = currentDate.getTime()/1000)+" seconds")
console.log((mm = ss/60)+" minutes")
console.log((hh = ss/3600)+" hours")
console.log((dd = hh/24)+" days")
console.log((mo = dd/30.4375)+" Months")
console.log((yy = mo/12)+" Years")
// Here, ss, mm, hh ... are called Implicit Globals and it is a very bad practice, google or GPT if you don't believe me ;P
// Some of the problems you will face are: Pollution of the Global Namespace, Tightly Coupled Code, Maintenance Nightmares, Strict Mode Errors, Performance Implications...etc

function calculateTime(n) {
    let sum = 0;
    for(let i=0; i<n; i++){
        // sum+=i;
        sum = sum + i;
    }
    return sum;
}
const ans = calculateTime(100);
console.log(ans);

const ed1 = currentDate.getTime();
const end = Date.now();
console.log("Exe-1 "+ ((end-start)/1000) + " Seconds")
console.log("exe-2 " + (ed1-st1) + " Seconds") 
/*
Error: A Date object does not “tick” forward once created. It’s just a snapshot of one moment in time. 
We only ever create one Date object (currentDate) at the very start.
Both st1 and ed1 call getTime() on that same object, so they return the exact same millisecond timestamp.
Hence ed1 - st1 is always 0.
*/

