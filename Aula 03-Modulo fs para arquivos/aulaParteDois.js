const http = require('http')
 const fs = require('fs') 
 const porta = process.env.PORT

const server=http.createServer(( req,res) =>{ 
    fs.appendFile ('teste.txt', 'Curso de Node - CFB Cursos', (err) =>{
if(err) throw err
 console.log('Arquivo Criado')
  res.end()

})
})
server.listen(porta || 3002, ()=>{console.log('Servidor rodando') });