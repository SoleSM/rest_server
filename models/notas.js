const {model, Schema} = require("mongoose");

const NotasSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true 
    },
    activo:{
        type: Boolean,
        default: true
    }
})

module.exports = model('Notas', NotasSchema);