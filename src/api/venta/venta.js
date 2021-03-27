const { Router } = require("express");
const router = Router();
const controller = require("./ventaController")

//localhost:4200/venta/
router.get("/obtenerVentas", controller.ObtenerVentas);
router.post("/guardarVenta", controller.GuardarVenta);
router.post("/guardarVentaDetalle", controller.GuardarVentaDetalle);
router.post("/obtenerVentaDetalle", controller.ObtenerVentaDetalle);

module.exports = router;