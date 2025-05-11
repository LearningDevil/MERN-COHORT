/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
/*
function wait1(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

function wait2(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function wait3(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return new Promise((resolve)=>{
        wait1(t1)
        .then(()=> wait2(t2))
        .then(()=> wait3(t3))
        .then(()=>{
                    const end = Date.now();
                    resolve(end-start);
        }); 
    });
}*/

// Use of Async/await
async function wait1(t) {
    await new Promise(resolve => setTimeout(resolve, t * 1000));
}

async function wait2(t) {
    await new Promise(resolve => setTimeout(resolve, t * 1000));
}

async function wait3(t) {
    await new Promise(resolve => setTimeout(resolve, t * 1000));
}

async function calculateTime(t1, t2, t3) {
    const start = Date.now();
    
    await wait1(t1);
    await wait2(t2);
    await wait3(t3);

    const end = Date.now();
    return end - start;
}

// 3-promise-all solution -> this solution is giving wrong answer.
/*
function wait1(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function wait2(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function wait3(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(()=>{
    const end = Date.now();
    return end - start;
    });
}*/

/*
 Conclusion:
            The expected difference between sequential execution and parallel execution with Promise.all():
- Sequential execution (calculateTime)
* Each function runs after the previous one completes, resulting in total execution time ≈ t1 + t2 + t3.
* The promise chain ensures the order is maintained, making it ideal for dependent tasks.

- Parallel execution (Promise.all())
* All functions start simultaneously, completing in ≈ max(t1, t2, t3).
* Faster overall but only works when tasks are independent.

Findings**: Sequential execution takes longer but ensures controlled order, 
while Promise.all() runs tasks in parallel, optimizing speed.
 */
module.exports = calculateTime;
