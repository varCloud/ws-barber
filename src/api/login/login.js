const { Router } = require("express");
const router = Router();
const controller = require("./loginController")

//localhost:4200/login/
router.post("/validarCredenciales", controller.ValidaCredenciales);

module.exports = router;