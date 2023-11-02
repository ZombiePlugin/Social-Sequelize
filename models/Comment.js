const { db, DataTypes } = require("../db/connection");

let Comment = db.define("Comment", {
  body: DataTypes.STRING,
  createdAt: DataTypes.STRING,
});

module.exports = Comment;
