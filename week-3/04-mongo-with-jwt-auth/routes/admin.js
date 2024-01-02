const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken")

const secretKey = "ronit";
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    const new_admin = new Admin({
        username: req.body.username,
        password: req.body.password
    })

    new_admin.save().then((admin) => {
        console.log(admin);
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(402)
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic


    const new_course = new Course({
        title: req.body.title,
        description: req.body.description,
        imageLink: req.body.imageLink,
        price: req.body.price
    });

    new_course.save().then((course) => {
        console.log(course);
        res.sendStatus(200)
    }).catch((err) => {
        console.log(err);
        res.sendStatus(402);
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic


    Course.find().then((result) => res.send(result)).catch((err) => {
        console.log(err);
        res.sendStatus(402)
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({ username: username, password: password }).then((user) => {

        if (user === null) {
            return res.send("Youre not authenticated").status(403);
        }
        const token = jwt.sign({ username, password }, secretKey)
        res.send(token)

    })

});


module.exports = router;