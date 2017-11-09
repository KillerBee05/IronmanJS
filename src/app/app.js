var express = require('express');

const bodyParser= require('body-parser');
var app = express();
var db = require('./db');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/lunch.component.html');
  console.log(req.body);
})

app.listen(4200, function () {
  console.log('Example app listening on port 4200!');
});
