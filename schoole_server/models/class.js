const pool = require("../startup/database");
const Joi = require("joi");

class Class {
  static addClass(class_name, year) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO classes (class_name, year) VALUES (?,?)",
        [class_name, year],
        (error, results, fields) => {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  }
}

function validateClass(cls) {
  const schema = {
    class_name: Joi.string().min(2).max(3).required(),
    year: Joi.number().positive().required(),
  };
  return Joi.validate(cls, schema);
}

exports.Class = Class;
exports.validateClass = validateClass;
