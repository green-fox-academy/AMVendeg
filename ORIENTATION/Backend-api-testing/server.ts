import { Request, Response } from 'express';
// import express from 'express';

const express = require('express');
export const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});


app.post('/', (req: Request, res: Response) => {
  const {what, numbers} = req.body;
  let respond: Respond = {};
  if(!what || !numbers || !numbers.length) {
    respond.error = 'Please provide what and numbers';
    res.status(400).json(respond);
    return;
  }

  if (what === 'sum') {
    respond.result = `${sum(numbers)}`;
  } else if (what === 'double') {
    respond.result = `${double(numbers)}`;
  }
  res.json(respond);
});



// functions
function sum(arr: number[]): number {
  return arr.reduce((acc, currentValue) => acc + currentValue);
}

function double(arr: number[]): number[] {
  return arr.map(x => x*2);
}

// app listen: need to commented the app.listen for the tests

// app.listen(PORT, () => {
//   console.log(`App listening to: ${PORT}`);
// });

// OR
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`App listens on http:localhost:${PORT}`);
  });
}


interface Respond {
  error?: string;
  result?: string;
}