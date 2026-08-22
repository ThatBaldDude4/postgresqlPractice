const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getUsername(username) {
    const { rows } = await pool.query(`SELECT * FROM usernames WHERE LOWER(username) = LOWER($1)`, [username]);
    return rows;
}

async function deleteUsernames() {
    await pool.query("DELETE FROM usernames");
    return;
}

module.exports = {
    getAllUsernames,
    insertUsername,
    getUsername,
    deleteUsernames
}