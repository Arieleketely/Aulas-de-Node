var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Olá Mundo!Sou Ariele!');
});

app.listen(3000, function() {
  console.log('Atenção app escutando na porta 3000!Funcionou!');
});