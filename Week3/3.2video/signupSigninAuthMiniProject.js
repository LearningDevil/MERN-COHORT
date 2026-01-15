    /* ** project for today **
        let people sign up to your website, Only allow signed in users
        to see people ( create a dummy people list ).
    */
    /*
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
    */

    const express = require("express");
    const jwt = require("jsonwebtoken");
    const jwtPassword = "123456";

    const app = express();
    app.use(express.json());

    const ALL_USERS = [
        {
            username: "dummymummy@yankee.com",
            password: "ItsMommynotMummyUDummy",
            name: "whyUWannaNo"
        },{
            username: "softheartdemon@ridetohell.com",
            password: "iAmNotFknDoingAnything",
            name: "mommyToldMeToAvoidStrangers"
        },{
            username: "accusorormorelikeapester@bummer.in",
            password: "wellISawUlaughtThereHellBoy",
            name: "itsYourMajestyToYou"
        },{
            username: "sinnerthedoer@secreat.have",
            password: "shhhhhhhhhhhh",
            name: "UNKNOWN"
        }
    ]

    function userExists(username, password){
        // write logic to return true or false if this user exists
        // in ALL_USERS array
        // method 1
        for (var user of ALL_USERS){
            if(user.username===username && user.password===password){
                return true;
            }
        }
        return false;
    /*
        // method 2
        const found = ALL_USERS.find((user)=>{
            return user.username === username && user.password === password
        });
        return !!found;

        // method 3
        return !!ALL_USERS.find(user=>
            user.username === username && user.password === password
        )


        // method 4
        return ALL_USERS.some(
            user.username === username && user.password === password
        )
    */

    }

    app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
        msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
    });

    app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        res.json({
            users: ALL_USERS.filter((value)=>{
                if(value.username===username) return false;
                else return true;
            })
        })
    } catch (err) {
        return res.status(403).json({
        msg: "Invalid token",
        });
    }
    });

    app.listen(3000, ()=>
        console.log("Server listening....")
    );