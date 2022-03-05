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


// ENPOINTS:

// test endpoint:
app.get('/hello', (_req: Request, res: Response) => {
  console.log('hello world');
  return res.status(200).send();
});


// test endpoint ids:
app.get('/ids', (_req: Request, res: Response<Post[]>) => {
  conn.query(`SELECT id FROM post`, (err: mysql.MysqlError, posts: Post[]) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    res.json(posts);
    return;
  });
});


// get all posts
app.get('/posts', (_req: Request, res: Response<Post[]>) => {
  conn.query(`SELECT * FROM post`, (err: mysql.MysqlError, posts: Post[]) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    res.json(posts);
    return;
  });
});


// POST - add one post to the database
app.post('/posted', (req: Request, res: Response) => {
  const post: Post  = req.body;
  conn.query(`INSERT INTO post (id, title, url, timestamp, score) VALUES (?,?,?,?,?)`,
  
  [post.id, post.title, post.url, `${post.timestamp}`, `${post.score}`],
  (error, result) => {
    if (error) {
      res.status(500).json(error);
      return;
    }
    result = 'Post is added succesfully.';
    res.status(200).json(result);
  });
});




app.listen(PORT, () => {
  console.log(`Yaaay app listening to: ${PORT}`);
});
