const course = require("express").Router();
const courseController = require("../controllers/v1/courseController");

course.route("/add").post(courseController.addCourse);
course.route("/get").get(courseController.getCourses);

module.exports = course;
