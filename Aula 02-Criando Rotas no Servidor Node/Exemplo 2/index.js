const express = require('express');
const app = express();

app.get("/", function(req, res){
res.send("oi pessoal!");

});

app.get("/sobre", function(req, res){
res.send("Sobre Ariele Ketely");
});

app.get('/blog', function(req,res){

res.send("Bem vindo ao blog Ariele Ketely!");

});

app.listen(8081, function(){console.log("Servidor Rodando ok!");});
