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
        
        let sql = 'INSERT INTO productos (`descripcion` , `costo` , activo, `idCatTipoProducto`)values ("'+postData.descripcion+'",'+postData.costo+', 1, '+postData.tipoProducto+')';
        response = { "estatus" : 200 , "mensaje": "Producto agregado exitosamente"}
        let result = await db.query(sql);
    } catch (ex) {
         response = {"estatus": -1 , "mensaje": "Ocurrio un error al agregar el producto"}
         console.log("error" , ex)
    }
    return response
}

async function ObtenerTipoProductos(postData) {
    let response = {};
    try {
        
        let sql = 'SELECT * FROM cat_tipo_producto';
        let result = await db.query(sql);
        response = JSON.parse(JSON.stringify(result));
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