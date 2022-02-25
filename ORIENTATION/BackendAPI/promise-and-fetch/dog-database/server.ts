import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

export interface Dog {
  name: string,
  age: number
}


let dogs: Dog[] = [];


app.use(express.json());
app.use(express.static('public'));

// static file loading
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// GET: json-t jön vissza a válaszban
app.get('/dogs', (_req, res) => {
  res.json({ dogs });
});


// add dog: POST, incoming dog: megnézem mi az amit el tudok küldeni
app.post('/dogs', (req, res) => {
  const dog = req.body as Dog;
  console.log({ incomingDog: req.body });
  res.json({ dogs });
});


app.listen(PORT, () => console.info(`app is listening: ${PORT}`));