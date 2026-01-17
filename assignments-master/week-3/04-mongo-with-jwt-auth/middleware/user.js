const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. 
    // Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const splitter = token.split(" ");
    const jwtToken = splitter[1];
    try{
        const decode = jwt.verify(jwtToken, jwtSecret);
        if(decode.username){
            req.username = decode.username;
            next();
        }else{
            return res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }catch(e){
        return res.json({
            msg: "Incorrect input"
        })
    }
}

module.exports = userMiddleware;