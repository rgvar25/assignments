const { Admin } = require("../db");
const jwt = require("jsonwebtoken")
const secretKey = "ronit"
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected


    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401)
        } else {
            console.log(decoded);
            Admin.findOne({ username: decoded.username, password: decoded.password }).then((user) => {
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

}

module.exports = adminMiddleware;