const jwt = require("jsonwebtoken")
const {User} = require("../db/index")
const secretKey = "ronit"


function userMiddleware(req, res, next) {
    console.log(req.headers.authorization)
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401)
        } else {
            console.log(decoded);
            User.findOne({username : decoded.username, password: decoded.password}).then((user) => {
                console.log(user);
                req.user = user;
                if (user === null) {
                    return res.send("Youre not authenticated").status(403);
                }

                next();
            }).catch((err) => {
                console.log(err);
                res.status(402)
            });
        }
    })
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;