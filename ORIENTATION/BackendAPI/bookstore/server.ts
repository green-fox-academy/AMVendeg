import * as mysql from 'mysql';
import { Request, Response } from 'express';
import { Book } from './books';

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


// get booklist: with authors datas, category and price
app.get('/booklist', (_req: Request, res: Response<Book[]>) => {
  sqlConn.query(`SELECT book_mast.book_id, book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price 
  FROM book_mast 
  JOIN author 
    ON book_mast.aut_id=author.aut_id 
  JOIN category 
    ON book_mast.cate_id=category.cate_id 
  JOIN publisher 
    ON book_mast.pub_id=publisher.pub_id;`, (err: mysql.MysqlError, books: Book[]) => {
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
