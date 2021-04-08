const mysql = require('mysql2');

//Connect to database in sql
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your Mysql username,
        user: 'root',
        //Your MYSQL password
        password: 'Spiderm@n1995',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;