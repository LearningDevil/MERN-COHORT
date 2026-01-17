const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");
const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config");
router.use(express.json());

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    });
    res.json({
        msg: "User Created !!"
    });
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await User.findOne({
        username: username,
        password: password
    });
    if(user){
        const token = jwt.sign({username}, jwtSecret);
        res.json({
            token: token
        });
    }else{
        res.status(411).json({
            msg: "Incorrect email and pass"
        });
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        courses: courses
    });
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    const user = await User.findOne({
        username: username
    })
/*
    await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourse: courseId
        }
    })
*/

    if(user){
        user.courses.push(courseId);
        await user.save();
        res.json({
            msg: "Course purchased successfully"
        });
    }else{
        res.status(404).json({
            msg: "User not found"
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    /*
    const courses = await Course.find({
        _id:{
            "$in" : user.purchasedCourses
        }
    });
    */
    const user = await User.findOne({
        username: username
    })
    await user.populate('courses');
    res.json({
        purchasedCourses: user.courses
    });
});

module.exports = router