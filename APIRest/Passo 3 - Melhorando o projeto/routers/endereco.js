const express=require('express')
const router=express.Router();

//retorna todas as endereco
router.get('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:'usando o get na rota de endereco'
    });
});


//insere endereco

    router.post('/',(req,res,next)=>{
        res.status(201).send({
            mensagem:'usando o get na rota de endereco'
        })  
    });

    //retorna os dados de uma endereco especifico
    router.get('/:id_endereco',(req,res,next)=>{
      const id=req.params.id_endereco

    if(id==='a'){
        res.status(200).send({
            mensagem:'rua A',
        id: id
    });

        }else {
            res.status(200).send({
                mensagem:'passou o id'
        });
    

    }
});

router.patch('/',(req,res,next)=>{
    res.status(201).send({
        mensagem:'usando PATCH',
    })
});


router.delete('/',(req,res,next)=>{
    res.status(201).send({
        mensagem:'usando delete',
    })
});


    module.exports=router;