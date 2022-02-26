import express from 'express';
import path from 'path';
import * as mysql from 'mysql';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

export interface Dog {
  id?: number,
  name: string,
  age: number
};

// const connURI = 'mysql://root:password@localhost/dogs';
const DATABASE_URL = 'mysql://hdcashazqczcngk2:lwt92ivo4t8oxi0s@spryrr1myu6oalwl.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/hs0klucb048ixv5q';

let sqlConn = mysql.createConnection(DATABASE_URL);
// let sqlConn = mysql.createConnection({
//   password: 'yourpassword',
//   host: 'localhost',
//   user: 'root',
//   database: 'dogs',
// });

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