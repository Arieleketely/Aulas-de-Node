(async ()=>{
    const db=require('./db')
    console.log('Obter todas pessoas')
    const pessoas=await db.todasPessoas()
    console.log(pessoas)
})()
