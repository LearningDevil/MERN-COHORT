// Revision for callbacks, Async, promises...
function bingo(){
    console.log("Bingo");
    return {
        Details: {
            Emp1: {
                id: 1,
                name: "Samy",
                age: 41,
                salary: 65486.35
            },
            Emp2: {
                id: 2,
                name: "Cony",
                age: 24,
                salary: 32561.00
            }
        }
    }
}

function mad(){
    console.log("Mad");
    return {
        Details: {
            Emp1: {
                id: 1,
                name: "jon",
                age: 87,
                salary: 95486.35
            },
            Emp2: {
                id: 2,
                name: "miky",
                age: 56,
                salary: 68561.00
            }
        }
    }
}

function angles(){
    console.log("Angles");
    return {
        Details: {
            Emp1: {
                id: 1,
                name: "coy",
                age: 19,
                salary: 55586.35
            },
            Emp2: {
                id: 2,
                name: "ory",
                age: 44,
                salary: 66661.00
            }
        }
    }
}

function tango(){
    return "Tango"
}
function caller1(callback){
    console.log(callback);
}

function caller2(callback){
    return callback;
}

function greet(cb1, cb2){ 
    console.log(cb1+" Greets the great "+cb2);
}

function TotalSalary(funcList){
    let total = 0;
    funcList.forEach(fn => {
        const data = fn();  // call the function
        const employees = Object.values(data.Details);
        employees.forEach(emp => {
            total += emp.salary;
        });
    });
    return total;
}
/* // callbacks
// -------------------
const x = caller1(bingo());
const y = caller2(mad()); // Perfect one
console.log(caller1(angles()));
console.log(caller2(bingo()));
// ------------------
const z = caller1(tango()); // Perfect one
const z1 = caller2(tango()); // it doesn't print
console.log(caller1(tango()));
console.log(caller2(tango())); // perfect one
// ----------------------
const a = greet(mad(), angles());
console.log(greet(mad(), bingo()));
const a = greet(tango(), tango()); // Only tango works because only tango returns an output whereas other returns nothing that is "Undenined".
console.log(greet(tango(), tango()));// That's why anything other than tango is not answering correctly.
// ----------------------
const c = TotalSalary([bingo, mad]);
console.log(c)
console.log(greet(bingo(), mad()));
console.log(TotalSalary([bingo, mad]));
*/




// callback, Async, Promises, async/await -->> sequencial revision
// 1. Callbacks
function sqrNum(n){
    return n * n;
}
function cubeNum(n){
    return n*n*n;
}
function sumGame(a,b,fn){
    let action1 = fn(a);
    let action2 = fn(b);
    return action1 + action2;
}
/*
let ans = sumGame(2,5,cubeNum);
console.log(ans);
*/
// ---------------------------------------------------------------
// 2. Async funcs
/*
const fs = require('fs');
function ondone(){
    console.log("hi there!!")
}
setTimeout(ondone, 1000);
console.log("After settimeout..");
fs.readFile("demofile.txt", fn => {
    ondone();
    console.log("yo..");
});
for(let i = 0; i<10000000; i++){
    i++;
}
console.log("after readfile and loop..");
*/

// 3. Promises
const fs = require("fs");

fs.readFile("demofile.txt", "utf-8", function (err, data){
    data = data + " yo yo...";
    console.log(data);
})

// ways to write your own async function
// 1. wrapping another async func.
/*
function mysettime(fn, duration){
    setTimeout(fn, duration);
}
mysettime(function(){ // returns undefinned
    console.log("logging first thing.")
    mysettime(function(){
        console.log("Logging second thing.")
    }, 2000)
}, 1000);
 
This method uses a callback, here we have created a function where other people can send a callback that's good, but it could lead to " Callback Hell".
So, callbacks leads to unnecessary indentation that is called callback hell.
*/
// 2. Using Promises now
function mysettime(duration){
    let p = new Promise(function(resolve){
        setTimeout(function (){
            resolve();
        }, duration);
    });
    return p;
}
const ans = mysettime(1000)
ans.then(function(){
    console.log("Log the 1st thing.");
});













