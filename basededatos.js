const mongoose = require('mongoose');

const conectarBD = () => {
    mongoose.connect('mongodb://localhost:27017/notasdb')
    .then( () => console.log('Conexion a BD exitosa'))
    .catch( (error) => console.log('Error conexion con la BD:', error))
}

module.exports = conectarBD;
