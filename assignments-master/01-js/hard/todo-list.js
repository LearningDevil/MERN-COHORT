/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.task = [];
  }
  add(todo){
    this.task.push(todo);
    return this;

  }
  remove(indexOfTodo){
    this.task.splice(indexOfTodo, 1);
    return this;

  }
  update(index, updatedTodo){
    if(index>=0 && index<this.task.length){
      this.task.splice(index,1,updatedTodo);
    }
    return this;
  }
  getAll(){
    return this.task;
  }
  get(indexOfTodo){
    return this.task[indexOfTodo] || null;

  }
  clear(){
    this.task = [];
    return this;

  }

}

module.exports = Todo;


/* some extra experiments
class pp{
  constructor(){
    this.result = [];
  }
  add(ap){
      this.result.push(ap);
  }
  getTodo(todoindex){
    return this.result.map((task, index) =>({
      index: index,
      task: task
    }));
  }
  // getAll(){
  //   this.result.forEach((value, index) =>{
  //     console.log(
  //     {index: index,
  //     task: value
  //     });
  //   });
  // }
  getAll(){
    return this.result.forEach((value)=>{
      console.log(value);
    });
  }
}
const todoList = new pp();
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');
todoList.getAll()
*/

