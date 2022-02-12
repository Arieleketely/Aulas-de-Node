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




const inserirPessoas=async(pessoas)=>{
    const con=await conectar()
    const sql = 'INSERT INTO pessoas(nome, telefone) VALUES (?,?)'
    const valores=[pessoas.nome,pessoas.telefone]
    await con.query(sql,valores)

}

module.exports = {todasPessoas,inserirPessoas}







