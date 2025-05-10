// Read a file, remove all the extra spaces and write it back to the same file.
const fs = require("fs");
const { resolve } = require("path");

/*
function writingFile(path, added_data){
    fs.readFile(path, "utf-8", (err, data) => {
        if(err){
            console.log(err);
        }else{
            content = data + added_data;
            fs.writeFile(path, content, ()=>{
                console.log("Writting File is Done....");
                readmyFile(path);
            });
        }
    });
}
function readmyFile(path){
    fs.readFile(path, "utf-8", (err, data) => {
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}
function fileCleaner(path){
    fs.readFile(path, "utf-8", (err, data) =>{
        if(err){
            console.log("The error is: ", err);
        }else{
            const cleaner_data = data.replace(/\s+/g, " ");
            fs.writeFile(path, cleaner_data, (err) =>{
                if(err){
                    console.log("Error: ", err);
                }else{
                    console.log("File Cleaning Done..");
                    readmyFile(path);
                }
            })

        }
    }) 
}
function fileReset(path){
    const data = "";
    fs.writeFile(path, data, ()=>{
        console.log("Reset done....");
    })
}
const input = "sample.txt";
fileCleaner(input);
setTimeout(()=>{
    fileReset(input);
    writingFile(input, "hello     world    my    name   is       vivek.");
}, 2000);
*/


/* 
Above methodology may work sometimes but it's flawed.
Reason: This approach could lead to unpredictable behavior due to asynchronous execution and race conditions.
that is we can not ensure that intended flow will follow or not.

Corrections: we should use callbacks, promises or async/await so the the process execution should be sequencial or as intended.
*/

// callback solution
/*
function writingFile(path, added_data, callback){
    fs.readFile(path, "utf-8", (err, data) => {
        if(err){
            console.log(err);
        }else{
            const content = data + added_data;
            fs.writeFile(path, content, ()=>{
                console.log("Writting File is Done....");
                readmyFile(path, callback);
            });
        }
    });
}
function readmyFile(path, callback){
    fs.readFile(path, "utf-8", (err, data) => {
        if(err){
            console.log(err);
        }else{
            console.log(data);
            if(callback){

                callback();
            }
        }
    });
}
function fileCleaner(path, callback){
    fs.readFile(path, "utf-8", (err, data) =>{
        if(err){
            console.log("The error is: ", err);
        }else{
            const cleaner_data = data.replace(/\s+/g, " ");
            fs.writeFile(path, cleaner_data, (err) =>{
                if(err){
                    console.log("Error: ", err);
                }else{
                    console.log("File Cleaning Done..");
                    readmyFile(path, callback);
                }
            })

        }
    }) 
}
function fileReset(path, callback){
    const data = "";
    fs.writeFile(path, data, ()=>{
        console.log("Reset done....");
        callback();
    })
}
const input = "sample.txt";
fileCleaner(input, ()=>{
    fileReset(input, ()=>{
        writingFile(input, "hello     world    my    name   is       vivek.")
    });
});
*/

// Promises

/*
function writingFile(path, added_data){
    fs.promises.readFile(path, "utf-8")
    .then(data=> {
        const content = data + added_data;
        return fs.promises.writeFile(path, content);
    })
    .then(()=>{
        console.log("Writting file done....");
        return readmyFile(path);
    })
    .catch(err => console.log("Error: ", err));
}
function readmyFile(path){
    return fs.promises.readFile(path, "utf-8")
    .then(data => {
            console.log(data);
    }).catch(err => console.log("Error: ", err));
}
function fileCleaner(path){
    return fs.promises.readFile(path, "utf-8").then(data =>{
            const cleaner_data = data.replace(/\s+/g, " ");
            return fs.promises.writeFile(path, cleaner_data);
    }).then(()=>{
        console.log("File cleaning done....");
        return readmyFile(path);
    }) .catch(err => console.log("Error in cleaner: ", err));
}
function fileReset(path){
    return new Promise(resolve=>{
        fs.writeFile(path, "", ()=>{
            console.log("Reset done....");
            resolve();
        });
    });
}
const input = "sample.txt";
fileCleaner(input)
.then(()=> fileReset(input))
.then(()=> writingFile(input, "hello     world    my    name   is       vivek."))
.catch(err => console.log("Error: ", err));
*/

// using async/await

async function fileCleaner(input) {
    const file = await fs.promises.readFile(input, "utf-8");
    const data = file.replace(/\s+/g, " ");
    await fs.promises.writeFile(input, data);
    console.log("File cleaning is done...")

    const updatedFile = await fs.promises.readFile(input, "utf-8");
    console.log(updatedFile);
}
fileCleaner("sample.txt");