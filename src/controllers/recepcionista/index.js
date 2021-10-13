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
   

module.exports={
    getRecepcionista,
    addRecepcionista
}