const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// middleware helye
app.use(express.static('assets'));
// middleware to convert everthing to json
app.use(express.json());

// send the index.html to the client
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// adding doubling endpoint 
app.get('/doubling', (req, res) => {
  let received = parseInt(req.query.input);
  let result = {};

  if (received) {
    result = {
      "received": received,
      "result": received * 2
    };
  } else {
    result = {
      error: 'Please provide an input!',
    };
  }

  res.json(result);
});


app.listen(PORT, () => {
  console.log(`yaaay, the port is listening this ${PORT}`);
});