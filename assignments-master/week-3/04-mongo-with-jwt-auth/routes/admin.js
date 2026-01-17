const { Router } = require("express");
const express = require("express");    
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db");
const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config");
router.use(express.json());
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin Created !!"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({
        username: username,
        password: password
    })
    if(admin){
        const token = await jwt.sign({username}, jwtSecret);
        res.json({
            token: token
        });
    }else{
        res.status(411).json({
            msg: "Incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = new Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    });

    res.json({
        msg: "Course created successfully",
        courseId: newCourse.id
    });
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({
        courses: courses
    });
});

module.exports = router;