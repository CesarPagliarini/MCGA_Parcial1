const esquemaCliente = require('../../src/models/clientes')

const getClientes = async (req, res) => {
    try{
        const response = await esquemaCliente.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cliente encontrado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addCliente =  async (req, res) => {
    try{
        const Cliente = new esquemaCliente(req.body)
        const newCliente = await Cliente.save()

        return res.status(200).json({
           data: newCliente,
            error: false,
            msg: 'Cliente creado correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

//const addCliente = async(req, res) =>{
//    const Cliente = new esquemaCliente({
//        name: req.body.name,
//        last_name: req.body.last_name,
//        email: req.body.email,
//        active: req.body.active,
//        cargo: req.body.cargo
//    });
//    try{
//        const newCliente = await Cliente.save();
//        res.json(newCliente);
//    } catch (error){
//        res.json({message: "error"})
//    }
//}


module.exports = {
    getClientes,
    addCliente
}