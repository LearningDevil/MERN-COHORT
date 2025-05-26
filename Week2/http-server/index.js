// use of express for making our http server
const express = require("express");

function calculate(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

const app = express();
const port = 3000;
app.use(express.json())
////////////////////////////////////////////////
app.get("/calculation", (req, res) => {
  const n = Number(req.query.n);
  const ans = calculate(n);
  res.send(`The sum is ${ans}`);
});
///////////////////////////////////////////////
// In-Memory hospital logic ->> In-memory means all the data is being stored in variables.
/*
Assignment:
you need to create 4 routes:
1. GET - User can check how many kidneys they have and their health
2. POST - User can add a new kedney
3. PUT - User can replace a kidney, make it healthy
4. DELETE - User can remove a kidney

Additional;
1. what should happen if they try to delete when there is no kidneys.
2. what should happen if they try to make a kidney healthy when all the kidneys are already healthy.
*/

const Users = [{
  name: "john",
  kidneys: [{
    healthy: true
  }]
}]

app.get("/", (req, res) => {
  const UserKidney = Users[0].kidneys;
  const noOfKidneys = UserKidney.length;
  // let noOfHealthyKidneys = 0;
  // for(let i = 0; i<noOfKidneys; i++){
  //     if(UserKidney[i].healthy){
  //         noOfHealthyKidneys = noOfHealthyKidneys + 1;
  //     }
  // }
  // using filter rather than loops
  const noOfHealthyKidneys = UserKidney.filter(kidneys => kidneys.healthy).length;
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;

  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys
  })
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  if (typeof isHealthy !== "boolean") {
    return res.status(400).json({ error: "isHealthy must be a boolean" });
  }
  Users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "Done"
  })
});

app.put("/", (req, res) => {
  if(Users[0].kidneys.some(k=>k.healthy === false)){ // or if(Users[0].kidneys.filter(k=>k.healthy === false).length > 0)
    for(let i = 0; i < Users[0].kidneys.length; i++){
      Users[0].kidneys[i].healthy = true;
    }
  res.json({})
}else{
  res.status(400).json({
    error: "your kidneys are already healthy."
  })
}


});

app.delete("/", (req, res) => {
  if(Users[0].kidneys.some(k=>k.healthy === false)){
    const new_kidney = []
    for(let i = 0; i < Users[0].kidneys.length; i++){
      if(Users[0].kidneys[i].healthy){
        new_kidney.push({
          healthy: true
        })
      }
    }
    // const new_kidney = UserKidney.filter(kidneys => kidneys.healthy)
    Users[0].kidneys = new_kidney;
    res.json({msg: "done"})
  }else{
    res.status(400).json({
      msg: "You don't have any bad kidneys."
    })
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});