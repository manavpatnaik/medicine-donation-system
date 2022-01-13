const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOSTNAME,
	user: process.env.MYSQL_USER,
	database: process.env.MYSQL_DB,
	password: process.env.MYSQL_PASSWORD
});

module.exports = connection;
