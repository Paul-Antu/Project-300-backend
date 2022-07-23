const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  title: String,
  secondaryTitle: String,
  description: String,
  image: String,
  readTime: String,
  date: String,
  year: String,
  slug: String,
  hashtags: [String],
  author: String,
});

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
