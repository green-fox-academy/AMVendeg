// 0.step npm init -y

import * as express from 'express';
import * as mysql from 'mysql';
import { Request, Response } from 'express';

const app = express();
const PORT = 3000;
const mySqlErrorMessage = 'Something went wrong, please try again later.';

app.use(express.static('public'));
app.use(express.json());

const conn = mysql.createConnection({
  password: 'yourpassword',
  host: 'localhost',
  user: 'root',
  database: 'money-planner'
});


// sql connection error handling
conn.connect((err: Error) => {
  if (err) {
    console.log('Cannot connect to the db', err);
    return;
  }
  console.log('connection established');
});


// create database table
const createPlanTableQuery = `
  CREATE TABLE IF NOT EXISTS plans (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    actualSpent INT NOT NULL DEFAULT 0,
    plannedSpent INT NOT NULL,
    name VARCHAR(45) NOT NULL);
`;


// create table query error handling
conn.query(createPlanTableQuery, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Table plan created');
});


// app listen
app.listen(PORT, () => {
  console.log(`App listening to: ${PORT}`);
});