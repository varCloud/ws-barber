const express = require('express')
const app = express()
const port = 4200
const db = require('./config/database')
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//localhost:8080   GET, POST, PUT-ACUTALIZA , DELETE -- ELIMINA
app.get('/', function (request, response) {
  response.send('Hello Norma Bienvenida a Tendencias de la web')
})

app.set("puerto", port);

app.listen(app.get("puerto"), () => {
    console.log("Inicio de servidor en la presetación", app.get("puerto"));
});

//localhost:8080/crearProducto
app.post('/crearProducto', function (req, res) {
    console.log(req.body);
    res.send('Hola  end-point crearProducto')
})

app.get('/actualizarProducto', function (req, res) {
  res.send('Hola  end-point actualizarProducto')
})


//localhost:4200/producto/
app.use("/producto", require("./api/producto/producto"));

 
//inicio de servicio
