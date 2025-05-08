const fs = require("fs")
/*
function myFileReader(path){
    fs.readFile(path, "utf-8", function (err, data){
        if (err){
            console.log(err);
        }else{
            // return data; // this approach will give Undefined
            console.log(data);
        }
    }) // as fs.readFile() doesn't return anything. if you try to return it it will return undefined.
}
const x = myFileReader("1-counter.md");
// console.log(x); // it pairs with "return data" part.
*/
// Promise approach
/*
function myFileReader(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
myFileReader("3-read-from-file.md")
.then(data => console.log(data))
.catch(err => console.log(err));

// - You need a .then() function to receive the value from resolve()
// - The data in .then(data => {...}) comes from what you passed into resolve(data)
// - Without it, the Promise runs but you ignore the result

*/

// Async/await
/*
async function myFileReader(path){
    return await fs.promises.readFile(path, "utf-8");
    // Promises is the important part here.
}
async function run(path){
    const content = await myFileReader(path);
    console.log("File Content: ", content);
}
run("1-counter.md");
*/

// try to do expensive task 
function myFileReader(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                setTimeout(() => {
                    console.log("Inside timeout...")
                    resolve(data);
                }, 5000);
            }
            console.log("SomeThing dark here...");
        });
    });
}
myFileReader("3-read-from-file.md")
.then(data => console.log(data))
.catch(err => console.log(err));
console.log("Doing some expenve part here");
let sum = 0;
for(let i=0; i<1e8; i++){
    sum = sum+i;
}
console.log(sum);