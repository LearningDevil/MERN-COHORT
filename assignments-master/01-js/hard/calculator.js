/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  add(num){
    this.result += num;
    return this; // we are returning "this" so we can use chaining for eg: calc.add(5).sub(2).mul(3).getResult();
  }
  subtract(num){
    this.result -= num;
    return this;
  }
  multiply(num){
    this.result *= num;
    return this;
  }
  divide(num){
    if(num === 0){
      throw new Error("Cannot divide by 0.")
    }else{
      this.result /= num;
    }
    return this;
  }
  clear(){
    this.result = 0;
    return this;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    this.result = 0;
    str = str.replace(/\s+/g, ''); // clear all the unnecessary whilespaces.
    // it a basic filter for conforming that we have numbers only. 
    for (let char of str) {
      if (!'0123456789+-*/().'.includes(char)) {
        throw new Error(`Invalid character found: ${char}`);
      }
    }
    // Safely evaluate the expression
    let res;
    try {
      res = new Function(`return (${str})`)();
    } catch (err) {
      throw new Error('Invalid expression');
    }

    // Check result is a finite number
    if (typeof res !== 'number' || !isFinite(res)) {
      throw new Error('Expression did not evaluate to a valid number');
    }
    this.result = res;
    return this.result;
  }
}

module.exports = Calculator;
