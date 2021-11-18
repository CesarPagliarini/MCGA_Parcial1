const reservaSchema = require('../../models/reserva');


const getReservas = async (req, res) => {
    try{
        const response = await reservaSchema.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Reservas encontradas exitosamente'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addReserva =  async (req, res) => {
    try{
        
        if(req.body.fechaFin < req.body.fechaInicio){
            return res.status(404).json({
                error: true,
                msg: 'La fecha de inicio no puede ser menor a la de fin'
            })
        }
        const reserva = new reservaSchema(req.body)
        const newReserva = await reserva.save()

        return res.status(200).json({
            data: newReserva,
            error: false,
            msg: 'Reserva creada correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const getReservaById = async (req, res) => {
    try{
        const response = await reservaSchema.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'La reserva solicitada no existe'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Reserva encontrada con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const updateReservaById = async (req, res) => {
        const response = await reservaSchema.findByIdAndUpdate(req.params.id, req.body, (err, reservaUpdate) => {
            if(err){
                res.status(400).send({msg: 'No se pudo actualizar la reserva'});
            }
            res.status(200).send({reserva: reservaUpdate})
        });
}


const deleteReservaById = async (req, res) => {
    try{
        const response = await reservaSchema.findOneAndRemove({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe la reserva'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Reserva eliminada con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}


module.exports = {
    getReservas,
    addReserva,
    getReservaById,
    updateReservaById,
    deleteReservaById
    
}