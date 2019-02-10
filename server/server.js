const path = require('path');
const express = require('express');
const app = express();
const pathToPublic = path.join(__dirname, '..', 'public');

app.use(express.static(pathToPublic));

// makes index is used for all routes (otherwise it will look for create.html etc.)
app.get('*', (req, res) => {
  res.sendFile(pathToPublic, 'index.html');
});

//start the server
app.listen(3000, () => {
  console.log('Hello Server is started');
});
