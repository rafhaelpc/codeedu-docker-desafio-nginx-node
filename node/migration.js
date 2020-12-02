const mysql = require('mysql');

function migration(config) {
  const connection = mysql.createConnection(config);

  const sql = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(100) NOT NULL)`;
  connection.query(sql);
  connection.end();
}

module.exports = migration;