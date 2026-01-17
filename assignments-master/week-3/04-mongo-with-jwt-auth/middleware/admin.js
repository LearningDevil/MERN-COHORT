const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. 
    // Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const splitter = token.split(" ");
    const jwtToken = splitter[1];
    try{
        const decode = jwt.verify(jwtToken, jwtSecret);
        if(!decode.username){
            return res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }catch(e){
        return res.json({
            msg: "Incorrect input"
        })
    }
    next();
}

module.exports = adminMiddleware;