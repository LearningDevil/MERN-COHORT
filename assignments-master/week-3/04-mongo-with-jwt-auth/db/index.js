const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://deepSleep:Devil.208@cluster0.fwnpy9a.mongodb.net/DBwithJWT');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true }
    
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}