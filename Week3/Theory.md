## 3.1 Middlewares, Authentication, global catches and zod

Problem:
* Auth checks?
* valid input by the user?

Solution: **Middlewares**

* Middleware Syntax: *func_name(req, res, next){...}*
- Here, **next** is a function itself that allows to process to the next func when called.
- Eg: app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {})
    ~ In the above eg usermiddleware is defined with req,res,next as parameters so when the authentication of user is completed then only the control will move to kidneyMiddleware.
- **app.use()** -> when you are needed to call a particular middleware at every instance of the your requests that is, get, post or any other then we use app.use().
For example: if "requestCounter" is a middleware and needed to be called for all the request the you can use:
                app.use(requestCouner);
                Any routes comes after this line will have this middleware added to it regardless. but the condition is requestCounter itself has to be calling next() else it won't work.
- Question: why do we need app.use(express.json()), when we want to access the body?
- Answer: because we or the system doesn't know that what the body is sending that is it may be text, json or anything else entirely, So we need to tell the system what the body is sending that is in this case the "json" thus it will be readable for the system.

-> **Global Catches:** -> this is also known as error-handling middlewares.
                    It is used to handle the server errors that's it sends a cleaner response to the user when an unexpected error comes. unlike app.use(express.json()) that has to be used before writing any port logic, global catches are written at the very end to catch any error and display them clearly.

                    syntax eg: app.use(function(err, req, res, next){
                        res.json({
                            msg: "There is something wrong with our server."
                        })
                    })

## How can you do better input validation?
Problem: 
        if(kidneyId != 1 && kidneyId != 2){
            return false;                 // This kind of validation is very hard to scale.
                                          // what if we expect a complicated input from the user ?
        }

Solution: **Input Validation Libraries** -->> such as *Zod*.
- Zod needs a schema or structure of your desired input, and thus zod will return **true** if the user input matches the schema else it will return **false**.

## Authentication
* General structure and steps in a normal authentication process:
1. User sends his email/pass to the server
2. server under tha hood verifies the user from it's database.
3. server send a token to the browser or client that will be stored in a local storage of the browser.
4. Now, whenever user want to access some data then that token will go along with the request and rather than checking the email/pass again and again it will verify the token to authenticate the user.
5. as the user get authenticated the server will respond with the data.

**Cryptography jargon.**
 * *Hashing:* "One way locking", means the data gets converted to some weired complex random string that will always be same whenever you make the same input.
    Eg: pass = itsAPass
        * if we use hashing here and assumes that it will get something like "okjjs5564sdsdsd765".
        in hashing whenever you try to hash "itsAPass", you will get same result everytime without fail.
    **Why it's one way**
    b/c we can never decode back to pass using hashcode.

* *Encryption:* "2 way locking", means you have kind of a key to lock and unlock the data using that key; namely being encryption and decryption.

* *JWT(JSON Web Tokens):* Simply speaking it just converts json input to a long string. as such it is *not hashed or protected*. so anyone who has this string will be able to know the contents of it.
    1. its neither encryption or hashing. (technically a digital signature)
    2. anyone can see the oroginal output given the signature.
    3. signature can be *verified* only using password.

* *Local Storage:* it's a browser storage means browser stored the relevent info and use it to verify you while sending the requests.

**Assignment**
Create a website with 2 end points:
1. POST /signin
    Body-{
        username: string
        password: string
    }
    > Returns a json web token with username encrypted.

2. GET /users
    Headers - 
    Authorizarion header
    > Returns an array of all the users if user is signed in (token is correct)
    > returns 403 status code if not
*Refer signupSigninAuthMiniProject.js for solution.*

**What JWT Really Is**
- JWT stands for JSON Web Token.
- It’s a compact, URL‑safe string used for authentication and authorization.
* A JWT is made up of three parts:
    - Header → algorithm + token type
    - Payload → data (like user ID, roles, expiry)
    - Signature → cryptographic proof that the token hasn’t been tampered with


## Databases

* Why in-memory data storing is bad:
    1. data can't be dynamic, if you update in memory objects, the updates are lost if the process restarts.
    2. There are multiple servers in real world.

* Real world architecture: (somewhat)

    Browser ---------> [(Backend)-->(Database)]
    > User/Browser hits backend.
    > Backend hits database
    > User doesn't have access to database/can't talk to DB.

* Types of DataBases:
    1. Graph DBs
    2. Vector DBs
    3. SQL DBs
    4. NoSQL DBs

**MongoDB (NoSql Database)**
    - MongoDB let's us create database.
    - In each DB, it let's us create tables(collections)
    - In each table, it let's us dump JSON data.
    - It is *schemaless*.
    - It scales well and in a decent choice for most use cases.

* How does backend connects to the database?
Ans: Using Libraries
- *Express* let's u create HTTP server.
- *jsonwebtoken* let's u create JWTs.
- *Mongoose* let's u connect to your database.  

