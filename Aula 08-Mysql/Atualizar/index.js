(async ()=>{
    const db=require('./db')
    
    console.log('Atualizar pessoas')
    const id=2
    const nome="Mariatres"
    const telefone='3737b6bfgdbbb'
    await db.atualizarPessoas(id,{nome:nome,telefone:telefone})
   console.log('pessoas'+id+'atualizado')
   
    
       console.log('Obter todas pessoas')
       const pessoas=await db.todasPessoas()
       console.log(pessoas)
   })()
   