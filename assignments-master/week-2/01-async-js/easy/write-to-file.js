const fs = require("fs");
function writingFile(path, added_data){
    fs.readFile(path, "utf-8", (err, data) => {err
        if(err){
            console.log(err);
        }else{
            content = data + added_data;
            fs.writeFile(path, content, ()=>{
                console.log("Writting done....");
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
function clearFile(path){
    const data = "";
    fs.writeFile(path, data, ()=>{
        console.log("Clear done....");
    })
}
clearFile("a.txt");
writingFile("a.txt", "This is added data");
setTimeout(()=>{
    readmyFile("a.txt");
}, 2000)