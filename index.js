const express = require('express');
const app = express();

const conectarBD = require('./basededatos')

conectarBD();

//Middlewares
app.use(express.json());
app.use(express.urlencoded( {extended: false}))

//routes
app.use(require('./routes/notas.routes'));



//Listen
app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"))
