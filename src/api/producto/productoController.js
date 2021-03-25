const productoDAO = require('../../DAL/productoDAO')

async function ObtenerProductos(req, res){
    try {
        let model =  await productoDAO.ObtenerProductos()
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}

async function CrearProductos(req, res){
    try {
        let postData = req.body
        let model =  await productoDAO.CrearProductos(postData)
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}

async function ObtenerTipoProductos(req, res){
    try {
        let postData = req.body
        let model =  await productoDAO.ObtenerTipoProductos(postData)
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    ObtenerProductos,
    CrearProductos,
    ObtenerTipoProductos
}