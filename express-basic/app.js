var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Hello World! [get]');
});

app.get('/name', function (req, res) {
  res.type('text/plain');
  res.send('My name is Express! [get]');
});

app.post('/', function (req, res) {
  res.type('text/plain');
  res.send('Hello World! [post]');
});

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var birds = require('./birds');
app.use('/birds', birds);