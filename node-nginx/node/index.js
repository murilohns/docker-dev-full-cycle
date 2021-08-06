const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const createPeopleTable = `CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
)`

app.get('/', (req,res) => {
  connection.query(createPeopleTable)

  const insertName = `INSERT INTO people(name) values('Wesley')`
  connection.query(insertName)

  let names

  const namesQuery = `SELECT name from people`

  connection.query(namesQuery, function (error, results, fields) {
    if (error) throw error;

    return res.send(`
      <h1>Full Cycle Rocks!</h1>

      ${results.map(result => {
        return result.name
      })}
    `)
  });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
