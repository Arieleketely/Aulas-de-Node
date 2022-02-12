const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
return global.conexao
 const mysql=require('mysql2/promise')
 const con=mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pessoas'
    })



   console.log('Conectou ao banco')
   global.conexao=con 
   return con

}
const todasPessoas=async()=>{
    const con=await conectar()
    const [linhas] = await con.query('select * from pessoas')
    return await linhas
}
const atualizarPessoas=async(id,pessoas)=>{
    const con=await conectar()
    const sql = 'UPDATE pessoas SET nome=?,telefone=? WHERE id=?'
    
    const valores=[pessoas.nome,pessoas.telefone,id]
    
    await con.query(sql,valores)

}
module.exports = {todasPessoas,atualizarPessoas}
