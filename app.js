const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 9000;
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://dannyboynyc:dd2345@ds139969.mlab.com:39969/bcl', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
  });
});



//app.use(express.static('app'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/watchlist', function(req, res) {  // our second route
  res.send(`
    <h1>Watchlist</h1>
    <p>Commentary on Watchlists will go here.</p>
    `);
});

app.get('/entry/:name', function(req, res) {
    let name = req.params.name;
    res.send(`
      <h1>${name}</h1>
      <p>Commentary on ${name} will go here.</p>
      `);
  });

  app.get('/entry/:name?/:link', function(req, res) {
    let name = req.params.name;
    let link = `${req.params.link}`;
    res.send(`
      <h1>${name}</h1>
      <p>Commentary on ${name} will go here.</p>
      <p>${link}</p>
      `);
  });
/*
app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});*/