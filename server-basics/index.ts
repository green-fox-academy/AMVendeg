
import { Response, Request, application } from 'express'; 

const express = require('express');
const app = express();
const port = 3000;


 app.listen(port, function(req:Request, res: Response){
  console.log(`Listening: on port: ${port}`);
});

app.get('/',(req: Request, res: Response) => {
  res.sendFile(__dirname + '/index.html');
})