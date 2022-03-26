// 0.step npm init -y

import * as mysql from 'mysql';
import { request, Request, Response } from 'express';

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

// GET all data form database
app.get('/', (_req: Request, res: Response) => {
  conn.query('SELECT * FROM plans', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(mySqlErrorMessage);
      return;
    }
    res.status(200).send(result);
  });
});



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


// GET endpoint for ID param
app.get('/plan/:id', (req: Request, res: Response) => {
  // const id = req.params.id;
  const { id } = req.params;

  // if the id not a number
  if (isNaN(+id)) {
    return res.status(400).send('Please provide a number.');
  }

  // endpoint for id cases: error, zero plan, plan id result
  conn.query('SELECT * FROM plans WHERE id = ?', [id], (err, plans) => {
    if (err) {
      console.log(err);
      res.status(500).send(mySqlErrorMessage);
      return;
    }

    if (plans.lenght === 0) {
      return res.status(404).send('Plan not found.');
    }

    res.status(200).json(plans[0]);
    return;
  });
});


// POST endpoint
app.post(
  '/plan',
  (req: Request, res: Response) => {
    const { name, plannedSpent } = req.body;

    if (!name || !plannedSpent) {
      return res.status(400).send('Please provide plan name and planned spent');
    }

    conn.query(
      'INSERT INTO plans (name, plannedSpent) VALUES (?,?)',
      [name, plannedSpent],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(mySqlErrorMessage);
          return;
        }

        conn.query(
          'SELECT * FROM plans WHERE id = ?',
          [result.insertId],
          (err, plans) => {
            if (err) {
              console.log(err);
              res.status(500).send(mySqlErrorMessage);
              return;
            }

            return res.status(200).json(plans[0]);
          }
        );
      }
    );
  }
);
  


// PUT endpoint
app.put(
  '/plan/:id/:spent',
  (req: Request<{ id: string; spent: string }>, res: Response) => {
    const { id, spent } = req.params;

  if (isNaN(+id) || isNaN(+spent)) {
    return res.status(400).send('Please provide number for id and spent.');
  }
  
  conn.query('UPDATE plans SET actualSpent = actualSpent + ? WHERE id = ?', [spent, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(mySqlErrorMessage);
      return;
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Plan not found');
    }

    conn.query('SELECT * FROM plans WHERE id = ?', [id], (err, plans) => {
      if (err) {
        console.log(err);
        res.status(500).send(mySqlErrorMessage);
        return;
      }

      return res.status(200).json(plans[0]);
    });
  });
});


// app listen
app.listen(PORT, () => {
  console.log(`App listening to: ${PORT}`);
});