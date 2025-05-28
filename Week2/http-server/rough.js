// const Users = [{
//   name: "john",
//   kidneys: [{
//     health: false
//   }]
// }]

// const UserKidney = Users[0].kidneys;
// const noOfKidneys = UserKidney.length;
// // let noOfHealthyKidneys = 0;
// // for(let i = 0; i<noOfKidneys; i++){
// //     if(UserKidney[i].health){
// //         noOfHealthyKidneys = noOfHealthyKidneys + 1;
// //     }
// // }
// const noOfHealthyKidneys = UserKidney.filter(kidneys => kidneys.health).length;
// const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;

// console.log(`User Name: ${Users[0].name}\nTotal Numbers of Kidney: ${noOfKidneys}\nTotal Numbers of healthy Kidneys: ${noOfHealthyKidneys}\nTotal Numbers of Unhealthy Kidneys: ${noOfUnhealthyKidneys}`)

let todos = []

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
 
app.get('/todo', (req, res) => {
  res.json(todos)
})

app.get('/todo/:id', (req, res) => {
  const todo = todos.find(i => i.unqid === parseInt(req.params.id));
  if(!todo){
    res.status(404).send();
  }else{
    res.json(todo);
  }
})
app.post('/todo', (req, res) => {
  const newTodo = {
    unqid : Math.floor(Math.random() * 10000),
    title : req.body.title,
    description : req.body.description
  }
  todos.push(newTodo);
  res.status(201).json(newTodo);
})

app.put('/todo/:id', (req, res) => {
  const todoIndex = todos.findIndex(i => i.unqid === parseInt(req.params.id));
  if(todoIndex === -1){
    res.status(404).send();
  }else{
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex])
  }

})

app.delete('/todo/:id', (req, res) => {
  const todoIndex = todos.findIndex(i => i.unqid === parseInt(req.params.id));
  if(todoIndex === -1){
    res.status(404).send();
  }else{
    todos.splice(todoIndex, 1);
    res.status(200).send();
  }

})

app.listen(3000);