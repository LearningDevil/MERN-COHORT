/* 
- Async func. V/S Sync Func.
- Real world usecase of CallBacks. (Callbacks are really needed for async functions not so much for syncronous functions.)
- Js browser architecture.
- Promises
- Async Await
*/
/* Section-1
function findsum(n){
    let ans = 0;
    for(let i=0; i<n;i++){
        ans+=i;
    }
    return ans;
}
function sumtill100(){
    console.log(findsum(100));
}
// busy wait -> trying to delay the outcome like async but using sync func.
function syncsleep(){
    let a = 1;
    for(let i = 0; i<10000000000; i++){
        a++;
    }
}
setTimeout(sumtill100, 1000); // <<=== calling async function
console.log("Hello, World!!");
// syncsleep();
console.log(findsum(50));
*/

/* // async File jargon
const fs = require("fs")
fs.readFile('Vid-1.5-test.txt', "utf-8", function(err, data){
    console.log(data);
})
console.log("hi there"); // Here, this line will be executed first even though it's written after the fs.
// Reason -> Simply say it's because fs is async func. (Here we delegated the task)
// Important: even if the fs is ready but the other processes are not completed yet then it has to wait untill that's not done
for(let i = 1, j = 0; i<= 1000000000; i++){
    j++;
}
console.log("yo yo ")
// here, even though fs was ready just after completing "hi there" log but still couldn't print the file content, 
// that is untill all the other process will be completed like that loop and "yo yo" part, Only after that the thread is free then it goes for remaining processes.
*/

// Promises
/*
function findsum(n){
    let ans = 0;
    for(let i=0; i<n;i++){
        ans+=i;
    }
    return ans;
}
function sumtill100(){
    console.log(findsum(100));
}
setTimeout(sumtill100, 1000); // <<=== calling async function
console.log("Hello, World!!");
*/
// Promises are the syntectical sugar that makes the code slightly more readable.

// How to create your own async func? -> Ugly way to define async func.
/*
It is a wrapper on top of another async function, 
which is fine
Usually all the async func we will write will be on top of JS provided async functions like: setTimeout or fs.readFile.
*/
const fs = require('fs');

function readMyFile(callback){ // own async func
    fs.readFile('Vid-1.5-test.txt', 'utf-8', function(err, data){
        callback(data);
    });
}
function oneDone(data){ // callback function to call
    console.log(data);
}

readMyFile(oneDone);