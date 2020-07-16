const pool = require("../startup/database");
const Joi = require("joi");

class Admin {
  static addAdmin(name) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO admins (name) VALUES (?)",
        [name],
        (error, results, fields) => {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  }
}

function validateAdmin(admin) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
  };
  return Joi.validate(admin, schema);
}

exports.Admin = Admin;
exports.validateAdmin = validateAdmin;
