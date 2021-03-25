const { Router } = require("express");
const router = Router();
const controller = require("./productoController")

//localhost:4200/producto/obtenerProductos
router.get("/obtenerProductos", controller.ObtenerProductos);
router.post("/crearProducto", controller.CrearProductos);
router.get("/obtenerTiposProductos", controller.ObtenerTipoProductos);

module.exports = router;