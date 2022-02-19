

const express = require('express');
const { reverseWords } = require('./reverseWords');
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/sith', (req, res) => {
  const input = req.body.text;

  result = reverseWords(input);
});


output = {'sith_text': result};
res.status(200).json(output).send();


app.listen(PORT, () => {
  console.log(`yaaay, the port is listening this ${PORT}`);
});


