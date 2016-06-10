var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.type('text/json');
  //res.send({"message":"Hello world!! [get]", "error":false});
  res.json({"message":"Hello world!! [get]", "error":false});
});

app.post('/', function (req, res) {
  res.json({"message":"Hello world!! [post]"});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
