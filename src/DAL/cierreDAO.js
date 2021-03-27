const { post } = require('../api/cierre/cierre');
const db = require('../config/database')

async function GenerarCierre(postData) {
    let response = {};
    try {
        let sql = 'call SP_GENERAR_CIERRE()';
        let result = await db.query(sql);
        response = JSON.parse(JSON.stringify(result[0]));
        return response;
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al generar el cierre"}
         console.log("error" , ex)
    }
    return response
}

async function ObtenerCierre(postData) {
    let response = {};
    try {
        let sql = 'call SP_OBTENER_CIERRES()';
        let result = await db.query(sql);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if(response.estatus == 200){
            response.modelo = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al generar el cierre"}
         console.log("error" , ex)
    }
    return response
}

module.exports = {
    GenerarCierre,
    ObtenerCierre
}