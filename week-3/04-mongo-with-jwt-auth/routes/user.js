const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index")
const jwt = require('jsonwebtoken')

const secretKey = "ronit"


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic


    const new_user = new User({
        username: req.body.username,
        password: req.body.password
    })

    new_user.save().then((user) => console.log(user)).catch((err) => console.log(err));
    res.send("done")
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((result) => res.send(result)).catch((err) => {
        console.log(err);
        res.sendStatus(402)
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

    Course.findById(req.params.courseId).then((value) => {
        if (value === null) {
            return res.send("Course not found")
        }

        console.log(value);

        req.user.course_purchased.push(value);
        req.user.save();
        return res.send(req.user)
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    let course_array = [];
    
    // Implement fetching purchased courses logic
    course_array = await Course.find({
        _id: {
            "$in": req.user.course_purchased
        }
    })

    for (element of req.user.course_purchased) {
        const course = await Course.findById(element);
        if (course) {

            course_array.push(course)
        }
    }

    res.send(course_array)

});


router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;


    User.findOne({ username: username, password: password }).then((user) => {


        if (user === null) {
            return res.send("Youre not authenticated").status(403);
        }
        const token = jwt.sign({ username, password }, secretKey)
        res.send(token)

    })

});


module.exports = router