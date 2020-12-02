const express = require("express");
const faker = require('faker');
const mysql = require('mysql');
const migration = require('./migration');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
faker.locale ='pt_BR';

const config = {
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'node_db',
}

migration(config);

app.get('/', (req, res) => {  
  const randomName = faker.name.findName();

  const connection = mysql.createConnection(config);
  connection.query(`insert into people(name) values ('${randomName}')`);

  connection.query('select * from people', (err, rows) => {
    res.render('index', { title: 'Desafio Code.education', message: 'Full Cycle Rocks!', people: rows});
  });

  connection.end();
});

app.listen(port, () => {
  console.log(`listening on port ${port}.`)
})

