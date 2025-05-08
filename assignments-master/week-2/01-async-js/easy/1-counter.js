// counter
// let ct = 0;
// function counter(){
//     if(ct<5){
//         console.log("hi there!!");
//         ct++;
//     }else{
//         clearInterval(s);
//     }
// }
// const s = setInterval(counter, 1000);

// using setIterval()
function counter(){
    return new Promise((resolve)=>{
        let ct = 0;
        const s = setInterval(()=>{
            if(ct<5){
                console.log(ct);
                ct++
            }else{
                clearInterval(s);
                resolve("Done...");
            }
        }, 1000);
    });
}

counter().then(message => {
    console.log(message);
});
