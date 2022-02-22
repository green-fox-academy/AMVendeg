import * as mysql from 'mysql';
import { Request, Response } from 'express';
import { Author } from './types';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json()); 

let sqlConn = mysql.createConnection({
  password: 'yourpassword',
  host: 'localhost',
  user: 'root',
  database: 'bookstore',
});

sqlConn.connect((err: Error) => {
  if (err) {
    console.log('Cannot connect to the db', err);
    return;
  }
  console.log('connection established');
});

// get Books list
app.get('/authors', (_req: Request, res: Response<Author[]>) => {
  sqlConn.query('SELECT * FROM author LIMIT 10', (err: mysql.MysqlError, books: Author[]) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    res.json(books);
    return;
  });
});







// app listen
app.listen(PORT, () => {
  console.log(`Yaaay app listening to: ${PORT}`);
});
