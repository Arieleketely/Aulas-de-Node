const mongodb=require('mongodb').MongoClient
const url= "mongodb://Ariele:Ariele@cluster0-shard-00-00.jb2qm.mongodb.net:27017,cluster0-shard-00-01.jb2qm.mongodb.net:27017,cluster0-shard-00-02.jb2qm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-1shlsl-shard-0&authSource=admin&retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{
if(erro)throw erro
const dbo=banco.db("Ariele")

const colecaoUm="pessoa"
const colecaoDois="endereco"

let obj=[
    {idpessoa:1,nome:"Pessoa cadastro",telefone:"CFB Cursos"},
    {idpessoa:2,nome:"Pessoa cadastro",telefone:"CFB Cursos"},
    {idpessoa:3,nome:"Pessoa cadastro",telefone:"CFB Cursos"}
]


dbo.collection(colecaoUm).insertMany(obj,async(erro,resultado)=>{
if(erro)throw erro
await console.log(resultado.insertedCount+ "novo curso inserido passou")

})




obj=[
    {idendereco:1,rua:'a'},
    {idendereco:2,rua:'b'},
    {idendereco:3,rua:'c'}
]
dbo.collection(colecaoDois).insertMany(obj,async(erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado.insertedCount+ "novo endereco inserido passou")

    })




query={}
dbo.collection(colecaoUm).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
    
        })

        dbo.collection(colecaoDois).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
            if(erro)throw erro
            console.log(resultado)
        
            })
           
       
})
