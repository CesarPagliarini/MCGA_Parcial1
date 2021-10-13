const recepcionistaEsquema = require ('../../models/recepcionista');

const getRecepcionista=async(req,res)=>{ try {
    const response = await recepcionistaEsquema.find();
    return res.status(200).json ({
        data: response,
        error:false,
    })
    }catch (error) {
        return res.status(400).json({
            error:true,
            message:error
        });
    }

};

const getRecepcionistaById= async (req,res)=>{
    try {
        const response =await recepcionistaEsquema.findOne({_id: req.params.recepcionistaId});

        if(!response || response.length===0){
            return res.status(404).json({
                error:true,
                message:"Recepcionista no Encontrado"
            })
        }
        return res.status(200).json({
            data:response,
            error:false,
        })
        
    } catch (error) {
        return res.status(400).json({
            error:true,
            message:error
        })
        
    }
};

const addRecepcionista=async(req,res)=>{
    try {
        const recepcionista = new recepcionistaEsquema(req.body);
        const newRecepcionista=await recepcionista.save();

        return res.status(201).json({
            data : newRecepcionista,
            error:false,
        })
    } catch (error){
        return res.status(400).json({
            error:true,
            message:error
        })
    }
};

const deleteRecepcionistaById=async(req,res)=>{
try {
    const response=await recepcionistaEsquema.findOneAndRemove({_id: req.params.recepcionistaId});
    if (!response || response.length===0){
        return res.status(404).json({
            error:true,
            message:"Recepcionista no Encontrado"
        })
    }
    return res.status(202).json ({
        data:response,
        error:false
    })
    
} catch (error) {
    return res.status(400).json({
        error:true,
        message:error
    })
    
}
};
   

module.exports={
    getRecepcionista,
    getRecepcionistaById,
    addRecepcionista,
    deleteRecepcionistaById
}