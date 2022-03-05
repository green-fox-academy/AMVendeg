import * as mysql from 'mysql';
import { Request, Response } from 'express';
import { allowedNodeEnvironmentFlags } from 'process';
import { request } from 'http';

const express = require('express');
const app = express();
const PORT = 3000;

// middleware public folder
app.use(express.static('public'));
app.use(express.json()); 

// mysql commection
let conn = mysql.createConnection({
  password: 'yourpassword',
  host: 'localhost',
  user: 'root',
  database: '',
});

// sql connection error handling
conn.connect((err: Error) => {
  if (err) {
    console.log('Cannot connect to the db', err);
    return;
  }
  console.log('connection established');
});


// endpoints

// test endpoint:
app.get('/hello', (req: Request, res: Response) => {
  console.log('hello world');
  return res.status(200).send();
});



// GET /posts
app.get('/posts', (req: Request, res: Response) => {

});














app.listen(PORT, () => {
  console.log(`Yaaay app listening to: ${PORT}`);
});
