const { Admin } = require('../db/index');



// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    Admin.findOne({ username: req.headers.username, password: req.headers.password }).then((admin) => {
        console.log(admin);
        if (admin === null) {
            return res.send("Youre not authenticated").status(403);
        }

        next();
    }).catch((err) => {
        console.log(err);
        res.status(402)
    });


}

module.exports = adminMiddleware;