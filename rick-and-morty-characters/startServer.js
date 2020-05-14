var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Node server listening on port 5000!');
});
