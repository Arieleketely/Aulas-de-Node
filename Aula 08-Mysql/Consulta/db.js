const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
return global.conexao
 const mysql=require('mysql2/promise')
 const con=mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pessoas'
    });



   console.log('Conectou ao banco')
   global.conexao=con 
   return con

}
const todasPessoas=async()=>{
    const con=await conectar()
    const [linhas] = await con.query('select * from pessoas')
    return await linhas
}


module.exports = {todasPessoas}



