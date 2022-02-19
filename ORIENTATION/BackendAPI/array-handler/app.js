const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/arrays', (req, res) => {
  const inputWhat = req.body.what;
  const inputNumbers = req.body.numbers;
  let error = '';
  let output = {};

  if (!inputWhat) {
    error = 'Please provide what to do with the numbers!';
    return res.status(404).json(error).send();
  }

  if (!inputNumbers) {
    error = 'Please provide numbers!';
    return res.status(404).json(error).send();
  }

  // what: sum
  if (inputWhat === 'sum') {
    let sum = 0;
    for (let i = 0; i < inputNumbers.length; i++) {
      sum += inputNumbers[i];
    }
    output = {'result': sum};
    res.status(200).json(output).send();
  }

  // what: multiply
  if (inputWhat === 'multiply') {
    let multiply = 0;
    for (let i = 0; i < inputNumbers.length; i++) {
      multiply = inputNumbers[i] * inputNumbers[i];
    }
    output = {'result': multiply};
    res.status(200).json(output).send();
  }

   // what: multiply
   if (inputWhat === 'double') {
    let doubledArr = [];
    for (let i = 0; i < inputNumbers.length; i++) {
      doubledArr.push(inputNumbers[i] * 2);
    }
    output = {'result': doubledArr};
    res.status(200).json(output).send();
  }
});

app.listen(PORT, () => {
  console.log(`yaaay, the port is listening this ${PORT}`);
});