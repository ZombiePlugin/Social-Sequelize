const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");
const seedUsers = require("./seed/users.json");
const seedProfiles = require("./seed/profiles.json");
const seedPosts = require("./seed/posts.json");
const seedLikes = require("./seed/likes.json");
const seedComments = require("./seed/comments.json");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
  });

  // Write your tests here

  test("Can create a user", async function () {
    await User.bulkCreate(seedUsers);
    const found = await User.findByPk(1);
    expect(found).toEqual(expect.objectContaining(seedUsers[0]));
  });

  test("Can create a Profile", async function () {
    await Profile.bulkCreate(seedProfiles);
    const found = await Profile.findByPk(1);
    expect(found).toEqual(expect.objectContaining(seedProfiles[0]));
  });

  test("Can create a Post", async function () {
    await Post.bulkCreate(seedPosts);
    const found = await Post.findByPk(1);
    expect(found).toEqual(expect.objectContaining(seedPosts[0]));
  });

  test("Can create a Like", async function () {
    await Like.bulkCreate(seedLikes);
    const found = await Like.findByPk(1);
    expect(found).toEqual(expect.objectContaining(seedLikes[0]));
  });

  test("Can create a Comment", async function () {
    await Comment.bulkCreate(seedComments);
    const found = await Comment.findByPk(1);
    expect(found).toEqual(expect.objectContaining(seedComments[0]));
  });
});
