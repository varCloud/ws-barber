const { post } = require('../api/login/login');
const db = require('../config/database')
async function ValidaCredenciales(postData) {
    let response = {};
    try {
        let sql = 'call SP_VALIDA_CREDENCIALES(?,?)';
        let result = await db.query(sql,[
            postData.usuario,
            postData.password,
        ]);
        response = JSON.parse(JSON.stringify(result[0][0]));
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al validar credenciales"}
         console.log("error" , ex)
    }
    return response
}

module.exports = {
    ValidaCredenciales
}