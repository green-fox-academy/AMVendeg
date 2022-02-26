import express from 'express';
import path from 'path';
import * as mysql from 'mysql';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static('public'));

export interface Dog {
  id?: number,
  name: string,
  age: number
};

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

sqlConn.query("CREATE TABLE IF NOT EXISTS detail (id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, age INTEGER NOT NULL)", (error, _) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`table created if did not exits`);
});


// static file loading
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// GET: json-t jön vissza a válaszban
app.get('/dogs', (_, res) => {
  sqlConn.query('SELECT * FROM detail', (err, dogs) => {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    }
    res.json({ dogs });
  });
});


// add dog: POST, incoming dog: megnézem mi az amit el tudok küldeni
app.post('/dogs', (req, res) => {
  const dog: Dog = req.body;
  sqlConn.query('INSERT INTO detail(name, age) VALUES(?, ?)', [dog.name, dog.age], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    }
    res.json({ dog, id: result.insertId });
  });
});


app.listen(PORT, () => console.info(`app is listening: ${PORT}`));