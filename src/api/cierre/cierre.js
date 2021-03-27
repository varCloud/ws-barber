const { Router } = require("express");
const router = Router();
const controller = require("./cierreController")

//localhost:4200/cierre/
router.get("/generarCierre", controller.GenerarCierre);
router.get("/obtenerCierre", controller.ObtenerCierre);


module.exports = router;