const express = require('express')
var cors = require('cors');
const app = express()
const port = 4200
const db = require('./config/database')

app.options('*', cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('Mensaje de Entrada |  Metodo Api: ' + req.url + ' - Ip Request: ' + req.ip + ' - Metodo HTTP: ' + req.method + ' - \\n Body Request: ' + JSON.stringify(req.body));
  let respuesta = res.send;
  res.send = function(data) {
      respuesta.apply(res, arguments);
      console.log('Mensaje de salida : ' + data)
  }
  next();
});

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
app.use("/venta", require("./api/venta/venta"));
app.use("/cierre", require("./api/cierre/cierre"));
app.use("/login", require("./api/login/login"));
 
//inicio de servicio
