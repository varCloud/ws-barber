const cierreDAO = require('../../DAL/cierreDAO.js')

async function GenerarCierre(req, res){
    try {
        let model =  await cierreDAO.GenerarCierre()
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}
async function ObtenerCierre(req, res){
    try {
        let model =  await cierreDAO.ObtenerCierre()
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}
module.exports = {
    GenerarCierre,
    ObtenerCierre
}