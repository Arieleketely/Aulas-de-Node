const express = require('express');
const app = express();

app.get("/", function(req, res){
res.sendFile(__dirname+"/html/index.html");

});



app.get("/sobre", function(req, res){
res.send("Sobre Ariele Ketely");
});




app.get('/blog', function(req,res){

res.send("Bem vindo ao blog Ariele Ketely!");

});


app.get('/ola/:nome/:cargo', function(req,res){

    res.send(req.params);
    
    })

    

app.listen(8082, function(){console.log("Servidor Rodando ok!");});
