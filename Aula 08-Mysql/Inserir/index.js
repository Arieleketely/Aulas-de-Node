(async ()=>{
 const db=require('./db')
 console.log('Insirir pessoas')
 await db.inserirPessoas({nome:'Mariadoisk',telefone:'7dfhdfhd'})


 
    console.log('Obter todas pessoas')
    const pessoas=await db.todasPessoas()
    console.log(pessoas)
})()
