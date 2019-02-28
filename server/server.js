const path = require('path');
const express = require('express');
const app = express();
const pathToPublic = path.join(__dirname, '..', 'public');
//get environment var from heroku if not on heroku use 3000
const port = process.env.PORT || 3000;

app.use(express.static(pathToPublic));

// makes index is used for all routes (otherwise it will look for create.html etc.)
app.get('*', (req, res) => {
  res.sendFile(path.join(pathToPublic, 'index.html'));
});

//start the server
app.listen(port, () => {
  console.log('Hello Server is started');
});

//from server dir
//node server.js

//looks like the node version needs to be set in ENGINES package.json
//see the node course for settings


//https://peter-react-expensify.herokuapp.com/ | https://git.heroku.com/peter-react-expensify.git