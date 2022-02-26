const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/translate', (req, res) => {
  const inputText = req.body.text;
  const inputLang = req.body.lang;
  console.log(inputText);
  let output = {};

  // if (!inputText || inputText === '' && !inputLang) {
  //   let error = {
  //     "error": "I can't translate that!"
  //   }
  //  res.status(404).json(error).send();
  // }


  output = {
    "translated": 'valami más',
    "lang": inputLang
  }
  res.status(200).json(output).send();

});

app.listen(PORT, () => {
  console.log(`yaaay, the port is listening this ${PORT}`);
});