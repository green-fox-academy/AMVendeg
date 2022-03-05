import * as mysql from 'mysql';
import { Request, Response } from 'express';
import { Post } from './posts';

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
  database: 'reddit',
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
app.get('/hello', (_req: Request, res: Response) => {
  console.log('hello world');
  return res.status(200).send();
});


// on '/' come back the posts
app.get('/ids', (_req: Request, res: Response<Post[]>) => {
  conn.query(`SELECT post.id FROM post`, (err: mysql.MysqlError, posts: Post[]) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    res.json(posts);
    return;
  });
});



// POST - postman
app.post('/posts', (_req: Request, res: Response) => {
  
  return res.status(201).send('created');
});














app.listen(PORT, () => {
  console.log(`Yaaay app listening to: ${PORT}`);
});
