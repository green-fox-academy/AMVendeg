const express = require('express');
const app = express();
const PORT = 5500;
const path = require('path');

// middleware helye
app.use(express.static('assets'));


app.get('/index.html', (req, res) => {
  // res.send('OK!');
  res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(PORT, () => {
 console.log(`yaaay, the port is listening this ${PORT}`);
});
