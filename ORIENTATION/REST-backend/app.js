
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// middleware helye
// middleware to convert everthing to json
app.use(express.static('assets'));
app.use(express.json());

// testing server connection w/ postman
// app.get('/', (_req, res) => {
//   res.send('hello');
// });

//send the index.html to the client
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// // adding doubling endpoint 
// app.get('/doubling', (req, res) => {
//   let received = parseInt(req.query.input);
//   let result = {};

//   if (received) {
//     result = {
//       "received": received,
//       "result": received * 2
//     };
//   } else {
//     result = {
//       error: 'Please provide an input!',
//     };
//   }

//   res.json(result);
// });



// // greeter endpoint 
// app.get('/greeter', (req, res) => {
//   const name = req.query.name;
//   const title = req.query.title;
//   let output = {};
//   let error = '';
  

//   if (!name || !title) {
//     if (!name && !title) {
//       res.status(400);
//       error = 'Please provide a name and a title!';

//     } else if (!title) {
//       res.status(400);
//       error = 'Please provide a title!';

//     } else if (!name) {
//       res.status(400);
//       error = 'Please provide a name!';
//     }

//     output = {error};

//   } else {
//     res.status(200);
//     output = { welcome_message: `Oh, hi there ${name}, my dear ${title}!`};
//   }

//   res.json(output);
// });


// // append A 
// app.get('/appenda/:appendable', (req, res) => {
//   let appendable = req.params.appendable;
//   let result = {};

//   if (!appendable) {
//     res.status(404);
//   }

//   res.status(200);
//   result = {appended: appendable + 'a'};
//   res.json(result);
// });


// DO until: works fine w/ postman
app.post('/dountil/:operation', (req, res) => {
  const input = req.body.input;
  const operation = req.params.operation;
  let output = {};
  let resultSum = 0;
  let resultFactor = 1;
  
  if (operation === 'sum') {
    for (let i = 0; i <= input; i++) {
      resultSum += i;
    }
    output = {'result': resultSum};
    res.status(200).json(output).send();
  }

  if (operation === 'factor') {
    for (let i = 1; i <= input; i++) {
      resultFactor *= i;
    }
    output = {'result': resultFactor};
    return res.status(200).json(output).send();
  }
});



app.listen(PORT, () => {
  console.log(`yaaay, the port is listening this ${PORT}`);
});