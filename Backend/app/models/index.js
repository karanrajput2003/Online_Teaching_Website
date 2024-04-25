const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.course = require("./course.model");
db.lesson = require("./lesson.model");
db.course_enroll = require("./course_enroll.model");
db.quiz = require("./quiz.model");
db.answer = require("./answer.model");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;