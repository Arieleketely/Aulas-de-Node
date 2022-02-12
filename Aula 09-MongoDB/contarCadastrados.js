const mongodb=require('mongodb').MongoClient
const url= "mongodb://Ariele:Ariele@cluster0-shard-00-00.jb2qm.mongodb.net:27017,cluster0-shard-00-01.jb2qm.mongodb.net:27017,cluster0-shard-00-02.jb2qm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-1shlsl-shard-0&authSource=admin&retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{
if(erro)throw erro
const dbo=banco.db("Ariele")
const colecao="pessoa"

const obj=[
    {nome:"Pessoa cadastro 6",telefone:"CFB Cursos"},
    {nome:"Pessoa cadastro 7",telefone:"CFB Cursos"},
    {nome:"Pessoa cadastro 8",telefone:"CFB Cursos"}
]

dbo.collection(colecao).insertMany(obj,async(erro,resultado)=>{
if(erro)throw erro
await console.log(resultado.insertedCount +" novas pessoas inseridas")

})
})
