const { User } = require("../db/index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    User.findOne({ username: req.headers.username, password: req.headers.password }).then((user) => {
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

module.exports = userMiddleware;