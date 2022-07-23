let Validator = require("validatorjs");
const Course = require("../../models/Course");

let courseController = {
  addCourse: async (req, res) => {
    try {
      let {
        title,
        secondaryTitle,
        description,
        image,
        readTime,
        date,
        year,
        slug,
        hashtags,
        author,
      } = req.body;

      const newCourse = new Course({
        title,
        secondaryTitle,
        description,
        image,
        readTime,
        date,
        year,
        slug,
        hashtags,
        author,
      });

      let course = await newCourse.save();

      return apiResponse.success(
        res,
        {
          data: course,
        },
        201,
        "Course added successfully!"
      );
    } catch (error) {
      console.log("got here inside error");
      return apiResponse.error(res, { error });
    }
  },

  getCourses: async (req, res) => {
    try {
      const Courses = await Course.find();
      return apiResponse.success(
        res,
        { data: Courses },
        200,
        "Courses found"
      );
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = courseController;
