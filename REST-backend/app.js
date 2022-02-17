const { rejects } = require('assert');
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


// greeter endpoint 
app.get('/greeter', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;
  let output = {};
  let error = '';
  

  if (!name || !title) {
    if (!name && !title) {
      res.status(400);
      error = 'Please provide a name and a title!';

    } else if (!title) {
      res.status(400);
      error = 'Please provide a title!';

    } else if (!name) {
      res.status(400);
      error = 'Please provide a name!';
    }

    output = {error};

  } else {
    res.status(200);
    output = { welcome_message: `Oh, hi there ${name}, my dear ${title}!`};
  }

  res.json(output);
});


// append A 
app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  let result = {};

  if (!appendable) {
    res.status(404);
  }

  res.status(200);
  result = {appended: appendable + 'a'};
  res.json(result);
});







app.listen(PORT, () => {
  console.log(`yaaay, the port is listening this ${PORT}`);
});