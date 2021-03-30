const loginDAO = require('../../DAL/loginDAO.js')

async function ValidaCredenciales(req, res){
    try {
        let postData = req.body
        let model =  await loginDAO.ValidaCredenciales(postData)
        return res.status(200).json(model);
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    ValidaCredenciales
}