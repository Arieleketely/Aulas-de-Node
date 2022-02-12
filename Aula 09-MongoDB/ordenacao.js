const mongodb=require('mongodb').MongoClient
const url= "mongodb://Ariele:Ariele@cluster0-shard-00-00.jb2qm.mongodb.net:27017,cluster0-shard-00-01.jb2qm.mongodb.net:27017,cluster0-shard-00-02.jb2qm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-1shlsl-shard-0&authSource=admin&retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{
if(erro)throw erro
const dbo=banco.db("Ariele")
const obj={nome:"Pessoa cadastro",telefone:"CFB Cursos"}
const colecao="pessoa"

const ordenacao={nome:1}
const query={}

dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro,resultado)=>{
if(erro)throw erro
console.log(resultado)
banco.close()
})



})
