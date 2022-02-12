const express=require('express');
const app=express();
const  morgan=require('morgan');

const rotaPessoas=require('./')
const rotaEndereco=require('./routers/endereco')
app.use(morgan('dev'));
app.use('/pessoas',rotaPessoas);
app.use('/endereco',rotaEndereco);

app.use((req,res,next)=>{
    const erro= new Error('Essa rota não existe');
    erro.status=404;
    next(erro);
});

app.use((error,req,res,next)=>{
    
    res.status(error.status || 500);
    return res.send({
erro: {
    mensagem: error.menssage
}
    });
  
});
module.exports=app;