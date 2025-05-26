const Users = [{
  name: "john",
  kidneys: [{
    health: false
  }]
}]

const UserKidney = Users[0].kidneys;
const noOfKidneys = UserKidney.length;
// let noOfHealthyKidneys = 0;
// for(let i = 0; i<noOfKidneys; i++){
//     if(UserKidney[i].health){
//         noOfHealthyKidneys = noOfHealthyKidneys + 1;
//     }
// }
const noOfHealthyKidneys = UserKidney.filter(kidneys => kidneys.health).length;
const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;

console.log(`User Name: ${Users[0].name}\nTotal Numbers of Kidney: ${noOfKidneys}\nTotal Numbers of healthy Kidneys: ${noOfHealthyKidneys}\nTotal Numbers of Unhealthy Kidneys: ${noOfUnhealthyKidneys}`)