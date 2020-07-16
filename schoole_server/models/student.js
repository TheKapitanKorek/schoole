const pool = require("../startup/database");
const Joi = require("joi");

class Student {
  static addStudent(name, surname, class_id) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO students (name,surname,class_id) VALUES (?,?,?)",
        [name, surname, class_id],
        (error, results, fields) => {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  }
  static addStudents(studentsArray, class_id) {
    return new Promise((resolve, reject) => {
      const valuesString = studentsArray
        .map((el) => {
          return `(${pool.escape(el.name)},${pool.escape(
            el.surname
          )},${pool.escape(class_id)})`;
        })
        .join(",");

      console.log(valuesString);
      pool.query(
        `INSERT INTO students (name,surname,class_id) VALUES ${valuesString}`,
        (error, results, fields) => {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  }
}

function validateStudent(student) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    surname: Joi.string().min(3).max(50).required(),
    class_id: Joi.number().positive().required(),
  };
  return Joi.validate(student, schema);
}

exports.Student = Student;
exports.validateStudent = validateStudent;
