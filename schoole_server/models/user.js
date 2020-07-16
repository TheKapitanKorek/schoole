const pool = require("../startup/database");
const { validate } = require("joi");
const Joi = require("joi");

class User {
  static addUser(type, profileID, email, password) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO users (${type}s_id,email,password) VALUES (?,?,?);`,
        [profileID, email, password],
        function (error, results, fields) {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  }

  static findByEmail(email) {
    return new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (error, results, fields) => {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  }
}

function validateUser(user) {
  const schema = {
    teachers_id: Joi.number().positive(),
    students_id: Joi.number().positive(),
    admin_id: Joi.number().positive(),
    students_class_id: Joi.number().positive(),
    email: Joi.string().email().min(5).max(100).required(),
    password: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(customer, schema);
}

exports.User = User;
exports.validateUser = validateUser;
