const jwt = require("jsonwebtoken");
const SECREAT_KEY = process.env.SECREAT_KEY;

const auth = (req,res,next)=>{
    try {
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token,SECREAT_KEY);
            req.userId = user.id;
        } 
        else{
            return res.status(401).json({message:"unorthorized user"});
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({message:"unorthorized error"});
    }
}

module.exports = auth;