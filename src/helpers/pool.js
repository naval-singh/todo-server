require('dotenv').config()
const mysql = require('mysql');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 100,
    multipleStatements: true
});

module.exports = pool;