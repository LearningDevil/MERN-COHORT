const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db");
const express = require("express");
router.use(express.json());
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin has been created successfully"
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: "Successfully course created", courseId: newCourse._id
    })
});

router.post('/courses/del/:courseId', adminMiddleware, async(req,res)=>{
    try {
        const courseId = req.params.courseId;
        await Course.deleteOne({ _id: courseId });
        res.json({ msg: "Course deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete course" });
    }
})

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        Courses: response
    })
});

module.exports = router;