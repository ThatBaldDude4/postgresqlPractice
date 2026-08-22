const db = require("../db/queries");

const options = {
    root: "D:/Programming/TheOdinProject/Exercises/postgresqlPract",
}

async function getUsernames(req, res) {
  let usernames = await db.getAllUsernames();
  const query = req.query.search;
  if (query) {
    usernames = await db.getUsername(query)
  }
  res.render("index", {users: usernames})
}

async function createUsernameGet(req, res) {
  res.sendFile("/views/form.html", options);
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteAllUsernames(req, res) {
    await db.deleteUsernames();
    res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernames
};
