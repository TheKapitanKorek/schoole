const pool = require("../startup/database");
const Joi = require("joi");
class Teacher {
  static async addTeacher(name, surname) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO teachers (name,surname) VALUES (?,?)",
        [name, surname],
        (error, results, fields) => {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  }
}

function validateTeacher(teacher) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    surname: Joi.string().min(3).max(50).required(),
  };
  return Joi.validate(teacher, schema);
}

exports.Teacher = Teacher;
exports.validateTeacher = validateTeacher;
