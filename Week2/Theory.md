## Week - 2
### 2.1
#### When we actually need async func.
- In one of these following cases: 
1. sleep/wait for some time.
2. to do a network call.
3. to read a file.
4. database call.
(Practice..)

### 2.2
**Topics:**
**node.js and it's runtime**
**Backend communication Protocalls**
**Express basics**
**routes, status codes.**

#### Node.js and runtime
need to understand 4 lvls.
- what is ECMAScript? -> *It's a standard, to create a javascript engine what functionalities you should have in that engine.*
- what is JavaScript?  -> *that is v8 engine, means that runs on the browser.*
- what is Node.js? -> *It is a **runtime**, that runs javascript code outside the browser and provides backend capabilities. It is written in c/c++.*
- what is bun? -> *node.js is generally slower, so to make it faster bun was introduced. It is implemented in 'Zig'.*

#### What can we do with node.js?
1. Create cli(CommandLine Interfaces)
2. Create Video Player
3. Create games
4. create HTTP servers (95%)

**What is a HTTP(HyeprText Transfer Protocol) server?**
-> A protocole that defined for machines to communicate.
-> Specifically *websites*, it's the most common way for a website's frontend to talk to it's backend.
-->> Thus, the server is some code that follows the HTTP protocol and is able to communicate with clients.
(Remote procedure search)

#### Client side needs to worry about in HTTP protocol..
1. Protocol (HTTP/HTTPs)
2. Address (URL, IP, PORTs)
3. Route
4. headers - body - query params
5. method (get/post/put/delete)

#### Server side needs to worry about in HTTP protocol..
1. Response header
2. Response Body
3. status codes 
    - 200 -> Everything is OK.
    - 404 -> page/route not found
    - 403 -> Authentication issue
    - 500 -> Internal server issue

**What happens when you fire a request in browser?**
1. browser parses the URL
2. does a DNS lookup (converts google.com into IP)
3. Establishes a connection to the IP (does Handshake)
*What is DNS(Doman Name Service) resolution?*
- URL mapped to an IP address.

**What happens when server receives the request?**
1. it get the input (route, body, header)
2. it do some logic on the input, calculate the output
3. it return the output body, headers, and status code.

## ------------------------------------------------------------------------
- Why do we need status codes? why can't we just return in the body something like T/F
- Why do we need so many request methods? why can't just one work?
- Why do we need body/header/query params, why can't just one work?

*These are **standard** practices, we don't need all of it, but it is what mentioned in the specs and hence is a good prsctice to follow.*

->> **Postman Implementation**

## 2.3 Bash Commands
Used WSL in case of windows

## 2.4 Advanced Bash Commands

## 2.5 Express with Example
practical implementation of doctor clinic scenerio.

## 2.6 Filter, Map and Arror function
**Filer:**
Syntax: array.filter((element, index, array) => condition)
Example: 
        const numbers = [1, 2, 3, 4, 5];
        const even = numbers.filter(num => num % 2 === 0);
        console.log(even); // [2, 4]

**Map:**
Syntax: array.map((element, index, array) => newValue)
Example: 
        const numbers = [1, 2, 3];
        const squared = numbers.map(num => num * num);
        console.log(squared); // [1, 4, 9]

**Arror Function:**
                    It's a shorter way of writting functions. there are some more things to it that will be explained later.

## 2.7 Git/Github
