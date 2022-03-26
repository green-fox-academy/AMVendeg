// 0.step npm init -y

import * as mysql from 'mysql';
import { Request, Response } from 'express';

const express = require('express');
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
    console.log(mySqlErrorMessage);
    return;
  }
  console.log('Table plan created');
});


// ENDPOINTS

// GET table datas
app.get('/plan/names', (_req: Request, res: Response) => {
  conn.query('SELECT id, name FROM plans', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(mySqlErrorMessage);
      return;
    }
    res.status(200).send(result);
  });
});





// app listen
app.listen(PORT, () => {
  console.log(`App listening to: ${PORT}`);
});