const db = require('../config/database')

async function ObtenerProductos() {
    let response = {};
    try {
        
        let sql = 'SELECT * FROM productos';
        let result = await db.query(sql);
        response = JSON.parse(JSON.stringify(result));
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function CrearProductos(postData) {
    let response = {};
    try {
        
        let sql = 'call SP_GUARDA_ACTUALIZA_PRODUCTO(?,?,?,?)';
        let result = await db.query(sql,[
            postData.idProducto,
            postData.descripcion,
            postData.costo,
            postData.idTipoProducto,
        ]);
        response = JSON.parse(JSON.stringify(result[0][0]));
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al agregar el producto"}
         console.log("error" , ex)
    }
    return response
}

async function ObtenerTipoProductos(postData) {
    let response = {};
    try {
        let sql = 'call SP_OBTENER_TIPOS_PRODUCTO()';
        //let sql = 'SELECT * FROM cat_tipo_producto';
        let result = await db.query(sql);
        
        response = JSON.parse(JSON.stringify(result[0][0]));
        if(response.estatus == 200){
            response.modelo = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al agregar el producto"}
         console.log("error" , ex)
    }
    return response
}

module.exports = {
 ObtenerProductos,
 CrearProductos,
 ObtenerTipoProductos
}