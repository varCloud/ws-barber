const { post } = require('../api/venta/venta');
const db = require('../config/database')

async function ObtenerVentas(postData) {
    let response = {};
    try {
        let sql = 'call SP_OBTENER_VENTAS()';
        let result = await db.query(sql);
        response = JSON.parse(JSON.stringify(result[0]));
        return response;
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al obtener las ventas"}
         console.log("error" , ex)
    }
    return response
}

async function GuardarVenta(postData) {
    let response = {};
    try {
        
        let sql = 'call SP_GUARDAR_VENTA(?)';
        let result = await db.query(sql,
            postData.ventaTotal
        );
        response = JSON.parse(JSON.stringify(result[0][0]));
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al guardar la venta"}
         console.log("error" , ex)
    }
    return response
}
async function GuardarVentaDetalle(postData) {
    let response = {};
    try {
        
        let sql = 'call SP_GUARDAR_VENTA_DETALLE(?,?,?,?)';
        let result = await db.query(sql,[
            postData.idVenta,
            postData.idTipoProducto,
            postData.monto,
            postData.cantidad,
        ]);
        response = JSON.parse(JSON.stringify(result[0][0]));
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al guardar la venta"}
         console.log("error" , ex)
    }
    return response
}

async function ObtenerVentaDetalle(postData) {
    let response = {};
    try {
        let sql = 'call SP_OBTENER_VENTAS_DETALLE(?)';
        let result = await db.query(sql,postData.idVenta);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if(response.estatus == 200){
            response.modelo = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al obtener las ventas"}
         console.log("error" , ex)
    }
    return response
}

module.exports = {
 ObtenerVentas,
 GuardarVenta,
 GuardarVentaDetalle,
 ObtenerVentaDetalle
}