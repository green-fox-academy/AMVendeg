import * as mysql from 'mysql';
import { Request, Response } from 'express';
import { Movie } from './types';

const express = require('express');
// const mysql = require('mysql');
const app = express();
const PORT = 3000;

// middleware public folder
app.use(express.static('public'));

// mysql commection
let conn = mysql.createConnection({
  password: 'yourpassword',
  host: 'localhost',
  user: 'root',
  database: 'movies',
});

// sql connection error handling
conn.connect((err: Error) => {
  if (err) {
    console.log('Cannot connect to the db', err);
    return;
  }
  console.log('connection established');
});


// first SQL 
app.get('/movies', (req: Request, res: Response<Movie[]>) => {
  // pagination, ha string a pageIndex:
  // const pageIndex: string = req.query.pageIndex as string;
  // vagy, ha desctructioning. akkor a típust az = után kell megadni
  const { pageIndex } = <{ pageIndex: string }>req.query;

  // get movies
  // pageindex-1*10 = ennyit skippel át
  // if pageindex nem létezik, vagy kisebb mint 1 dobjon 400-as hibat, mert ez nem a server hibája
  if (!pageIndex || parseInt(pageIndex) < 1) {
    return res.status(400).send();
  }

  conn.query(`SELECT * FROM movie LIMIT 10 OFFSET ${(parseInt(pageIndex) -1) * 10}`, (err: mysql.MysqlError, movies: Movie[]) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    res.json(movies);
    return;
  });
});







app.listen(PORT, () => {
  console.log(`Yaaay app listening to: ${PORT}`);
});


