const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vardhamaneronit:1234@cluster0.mpbhndc.mongodb.net/Users');
// Define schemas
const db = mongoose.connection;
db.on('error', () => console.log('error'));
db.once('open', () => console.log("success"))
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password : String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink:String, 
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);

const Course = mongoose.model('Course', CourseSchema);

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    course_purchased: [{type : mongoose.Schema.Types.ObjectId, ref : Course}]

});
const User = mongoose.model('User', UserSchema);

module.exports = {
    Admin,
    User,
    Course
}