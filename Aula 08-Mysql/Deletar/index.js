(async ()=>{
    const db=require('./db')
    
    console.log('Deletar pessoas')
    const id=1

    await db.deletarPessoas(id)
   console.log('pessoas'+id+'deletado')
   
    
       console.log('Obter todas pessoas')
       const pessoas=await db.todasPessoas()
       console.log(pessoas)
   })()
   