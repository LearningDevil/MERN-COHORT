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