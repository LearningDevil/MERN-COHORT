// Solution-1
/*
function OnesecDelay(){
    return new Promise(function (resolve){
        setTimeout(resolve, 1000);
    });
}
function counter(){
    let c = 0;

    function looper(){
        if(c<5){
            console.log(c);
            c++;
            OnesecDelay().then(looper);
        }else{
            console.log("It's Done...")
        }
    }
    looper();
}
counter();
*/

// Solution-2
/* Problem
function OnesecDelay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

function counter() {
    let p = Promise.resolve();
    let c = 0;
// this is wrong code because here the output will be 5 5 5 5 5
// because of "a classic JavaScript closure + asynchronous behavior puzzle"
// as the printing value is on the basis of reference rather than value thus, it is taking the global value 5 as an output and it happens because untill then non of the .then function executed.
    while (c < 5) {
        p = p.then(() => {
            console.log(c);
            return OnesecDelay();
        });
        c++;
    }

    p.then(() => console.log("Done.."));
}

counter();
*/
// problem Solution
/*
function OnesecDelay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

function counter() {
    let p = Promise.resolve();
    let c = 0;

    while (c < 5) {
        let current = c;
        p = p.then(() => {
            console.log(current);
            return OnesecDelay();
        });
        c++;
    }

    p.then(() => console.log("Done.."));
}

counter();
*/

// Solution-3
/*
function counter(c = 0) {
    if (c < 5) {
        console.log(c);
        setTimeout(() => counter(c + 1), 1000);
    } else {
        console.log("Done..");
    }
}
counter();
*/

// Solution-4
function OnesecDelay(){
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function looper() {
    let c = 0;
    while(c<5){
        console.log(c);
        c++;
        await OnesecDelay();
    }
    console.log("Done...")
}
looper();
