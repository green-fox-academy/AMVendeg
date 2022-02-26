
import { Response, Request, Application } from 'express'; 

const express = require('express');
const app = express();
const port = 3000;


app.listen(port, function(req:Request, res: Response){
  console.log(`Listening: on port: ${port}`);
});

app.get('/',(req: Request, res: Response) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/filter',(req: Request, res: Response) => {
  console.log(req.query);
  console.log(req.query.color);
  res.send('ok');
});

app.use('/basket', (req: Request, res: Response) => {
  res.append('teszt', 'siker');
  //next();
});




app.get('/basket',(req: Request, res: Response) => {
  res.send('content of the basket');
});


// correct order: app.use, then app.get
app.use(express.static(__dirname + '/assets'));

app.get('/panda', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/assets/panda.png')
});