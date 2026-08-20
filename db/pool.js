const { Pool } = require("pg");

// load environment variables
const { loadEnvFile } = require('node:process');
loadEnvFile();
const {HOST, USER, DATABASE, PASSWORD, PORT} = process.env;

module.exports = new Pool({
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD,
    port: PORT
});