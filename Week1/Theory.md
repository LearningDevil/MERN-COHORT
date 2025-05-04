## Theory:
### 1. JavaScript Foundation
**JS is an Interpreted lang.**
 - Means it goes line by line while executing, partially run code until an error encounter.

**Why JS is better than other lang.**
 - Browsers can only understand HTML/CSS/JS (Not technically true)
 - Node.js -> Enables JS to be used for "Backend Development" as well.

**Strict VS Dynamic Langs.**

**Single Threaded nature of JS**
 - JS uses strictly 1 core of your machine at a time.
 - That's why it considered to be a bad lang. for scalable systems.
  **There is a way to make it use all cores of your machine.**

**Simple Primitive**
 - variables > let, var, const
 - DataTypes > Strings, Numbers, booleans
 - if/else
 - Loops-For loops 
  **Generally, we use "let" and "const" >> that's when we need a variable that can change it's type or dynamic in nature then use "let", whereas "const" is used when variable needs to be fixed.**

**Arrays & Objects**

**Function**
   - Let's us abstract out logic in your prog.
   - Think of them as independent part of the prog. that works when needed(called), it takes input and provide the respective output value.
   **Concept of callbacks**
      - eg. function xyz(n1, n2, fnToCall){}
 **Reminder - 03/05/25 completed 01-js and week--1 in assignments-master.**
 **Anonymous functions**
  - Rather than passing a callback function those are already defined, anonymous functions are defined at the whole body itself to that part.

**Vid-1.5 Async, Await and Promises** (Imp.)
### synchronous means??
  - Sync = Together, One after other, sequential
  - Only one thing is happening at a time.

### Asynchronous means??
  - polar opposite of sync. that is things happens in parts.
  - Multiple things are context switiching with eachother.
  - we can also picture it as doing things parallaly.
### Intution
* Human brain and body is single threaded.
* But we can context switch, or delegate tasks to others. (take the eg of "Maggi Making".)
* Real world eg. is **Reading files from file system**.

**Therefore** we can say that, Even if we are single threaded, we can do things parallely by delegating the task or by context switching.
Thus, The net time taken can be decreased by this. 
**That's what JavaScript do, it can delegate things as well as context switch with the Help of ASYNCHRONOUS FUNCTIONS.**

#### Common Async functions:
- **SetTimeout**
- **fs.readFile** -> To read a file from your filesystem.
- **Fetch** -> To fetch some data from an API endpoint.

#### latentflip.com -> a js code process visualizer.
**JS browser architecture**
- Call stack
- Web API
- Event Loop
- callback queue

**So as for the callbacks, it's real world implementation and need is for async functions specially.**

### Promises
- Promises are the syntectical sugar that makes the async code slightly more readable.

### Async await
- await is only valid and allowed in a async function
- This also do the same thing as promises but it is more readable or sugar coat it.
- await is performed at the callback side thus making it more readable.

#### Week-1 Done 🫡