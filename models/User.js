const { db, DataTypes } = require("../db/connection");

let User = db.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = User;
