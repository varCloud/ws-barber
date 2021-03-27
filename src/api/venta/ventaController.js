const ventaDAO = require('../../DAL/ventaDAO')

async function ObtenerVentas(req, res){
    try {
        let model =  await ventaDAO.ObtenerVentas()
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}

async function GuardarVenta(req, res){
    try {
        let postData = req.body
        let model =  await ventaDAO.GuardarVenta(postData)
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}

async function GuardarVentaDetalle(req, res){
    try {
        let postData = req.body
        let model =  await ventaDAO.GuardarVentaDetalle(postData)
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}

async function ObtenerVentaDetalle(req, res){
    try {
        let postData = req.body
        let model =  await ventaDAO.ObtenerVentaDetalle(postData)
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    ObtenerVentas,
    GuardarVenta,
    GuardarVentaDetalle,
    ObtenerVentaDetalle
    
}