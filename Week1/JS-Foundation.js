/*
1. Write a program to greet a person givem there first and last name.
2. Write a prog. that greets a peson based on there gender.
3. Write a prog. that counts from 0-1000 and prints sum.
*/
/*
let firstname = "Ben"
let lastname = "Stokes"
let age = 20
let gender = "male";
let isMarried = false
// Solution 1
console.log("Greetings "+firstname+" "+lastname+", Nice to meet you.🖐️")
// solution 2
if(gender=="male"){
    console.log("Greetings Gentleman, Have some food...")
}else if(gender=="female"){
    console.log("Greetings ma'am, Nice to see you.")
}else{
    console.log("Welcome to out humble gathering...")
}
// solution 3
let sum = 0;
for(let i = 0; i<=1000; i++){
    sum = sum + i;
}
console.log("\nSum: "+sum);
*/

// Array & Obj.
/* // Practice..
let emp = ["yaman", "Naman", "Chaman"];
let age = [21, 24, 30];
const hj = ["df", 5]
const jj = [{
    emp: {
        firstname: "Raunit",
        lastname: "Mehra"
    },
    salary: 25000,
    metadata:{
        age: 19,
        gender: "male"
    }
},
{
    emp: {
        firstname: "Chavi",
        lastname: "Patnekar"
    },
    salary: 42000,
    metadata:{
        age: 25,
        gender: "female"
    }
}]
for(let i = 0; i<jj.length; i++){
    console.log(`\nEmpleyee Details: \nName: ${jj[i].emp.firstname}\nAge: ${jj[i].metadata.age}\nSalary: ${jj[i].salary}`)
    if(jj[i].metadata.gender=="female"){
        console.log("🤠Get ready for your adventure ma'am.\n")
    }else{
        console.log("😎Let's win this...\n")
    }
}
*/
/* Test
1. WAP to print all the even no. in an array.
2. WAP to print biggest no. in an array.
3. WAP print all the males name given in a complex object.
4. WAP to reverse all the elements in an array.
*/
/*
// Sol 1
let arr = [1,5,1,6,7,9,10,56]
console.log("Even Numbers: ")
for(let i =0; i<= arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}
// sol 2
let bigboi = arr[0];
for(let i = 0; i<=arr.length; i++){
    if(arr[i]>bigboi){
        bigboi = arr[i]
    }
}
console.log(`Biggest number: ${bigboi}`)
// sol 3
const jj = [{
    emp: {
        firstname: "Raunit",
        lastname: "Mehra"
    },
    salary: 25000,
    metadata:{
        age: 19,
        gender: "male",
        address: "NainiTal"
    }
},
{
    emp: {
        firstname: "Chavi",
        lastname: "Patnekar"
    },
    salary: 42000,
    metadata:{
        age: 25,
        gender: "female",
        address: "Agra"
    }
},
{
    emp: {
        firstname: "Sachin",
        lastname: "Kaushik"
    },
    salary: 49000,
    metadata:{
        age: 32,
        gender: "male",
        address: "Banglore"
    }
}]
console.log("\n---------------Male empleyees: -----------------")
for(let i = 0; i<jj.length; i++){
    if(jj[i].metadata.gender=="male"){
        console.log(jj[i].emp.firstname+"   ->  "+jj[i].salary);
    }
}
// sol 4 - Rev. of all the elements
let arr2 = [1,2,3,4,5,6,7];
let n = arr2.length;
console.log("Reversed Array: ")
for(let i = 0; i<n/2; i++){
    let temp = arr2[i];
    arr2[i] = arr2[n-1-i];
    arr2[n-1-i] = temp;
}
for(let i = 0; i<n; i++){
    console.log(arr2[i])
}
*/

// Functions

function demiSum(a,b){
    return a+b;
}
function sum(a, b, fnToCall){
    let result = a+b;
    fnToCall(result);
}
function displayResult(data){
    console.log("Result of the sum is: " + data);
}
function displayPasivResult(data){
    console.log("Sum's result is: " + data);
}
// approach 1
const ans = demiSum(5,7);
const result = displayPasivResult(ans);
// Approach 2 -> callbacks
let ans1 = sum(58,9, displayResult);
ans1 = sum(11, 99, displayPasivResult);
