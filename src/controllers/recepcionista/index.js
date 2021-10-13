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
   

module.exports={
    getRecepcionista
}