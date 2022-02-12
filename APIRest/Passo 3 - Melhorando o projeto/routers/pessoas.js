const express=require('express')
const router=express.Router();

//retorna todas as pessoas
router.get('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:'usando o get na rota de pessoas'
    });
});


//insere produto

    router.post('/',(req,res,next)=>{
        res.status(201).send({
            mensagem:'usando o get na rota de pessoas'
        })  
    });

    //retorna os dados de uma pessoa especifica
    router.get('/:id_pessoas',(req,res,next)=>{
      const id=req.params.id_pessoas

    if(id==='especial'){
        res.status(200).send({
            mensagem:'usando o id 1 especial',
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