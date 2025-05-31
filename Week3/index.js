// Hospital eg. for middleware

const express = require("express");
const app = express();
const zod = require("zod");

app.use(express.json()) // use -->> when you are needed call a particular middleware at every instance of the your requests that is, get, post or any other then we use app.use().


let requestCount = 0;
function calculateRequests(res, req, next){
    requestCount++;
    console.log(`Request Count: ${requestCount}`);
    next();
}

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username === "vivek" && password === "pass"){
        next();
    }else{
        res.status(403).json({msg: "Invalid User"})
    }
}

const kidneyMiddleware = (req, res, next) =>{
    const kidneyId = req.query.kidneyId;
    if(kidneyId == 1 || kidneyId == 2){
        next();
    }else{
        res.status(403).json({msg: "Invalid input"})
    }
}
/*
app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "vivek" && password != "pass"){
        res.status(403).json({msg: "Invalid User"});
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({msg: "Invalid Input"});
        return;
    }

    res.send("You have healthy Kidney");
})  
*/
/*
// Middleware usage
app.get('/health-checkup', calculateRequests, userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("You have healthy Kidney");
}) 
*/

// Input validation 
/*
app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;

    res.send(`you have ${kidneylength} kidneys`);
})

app.use(function(err, req, res, next){
    res.json({
        msg: "sorry, There is something up with our server.";
    })
})*/

// Input validation using Zod
// Write a schema for email, password and country validation
const uservalidator = zod.object({
    email: zod.string().email(),
    pass: zod.string().min(8),
    country: zod.literal('IN').or(zod.literal('US'))
});
const schema = zod.array(zod.number());
app.post('/health-checkup', (req, res) =>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg: "Invalid Input"
        })
    }else{ 
        res.send({
            response
        })
    }
})
app.listen(3000, ()=>{
    console.log("Listening......");
})