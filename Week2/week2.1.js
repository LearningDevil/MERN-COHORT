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




// Async, Promises, async/await

