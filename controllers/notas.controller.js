const Nota = require("../models/notas");
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/notas');

const ctrlNotas ={};


//Consulta de notas
ctrlNotas.getNotas =async (req, res) => {
    const notas = await Nota.find({ activo: true }) 
    
    // Respuesta del servidor
    res.json(notas);
}

//Guardar notas
ctrlNotas.postNotas = async (req, res) => {
    const { titulo, descripcion } = req.body;

    try {

        const notas = new Nota ({titulo, descripcion});
        await notas.save() 
    
        res.json({msg: 'Nota creada correctamente'});
        
    } catch (error) {
        
        res.json({msg: 'Error al crear la nota:', error})
    }
   
}

// Actualiza las notas
ctrlNotas.putNotas = async (req, res) => {
    const { titulo, descripcion, id } = req.body

    const notas = await Nota.findByIdAndUpdate(id, {titulo, descripcion}, { new: true })

    res.json({
        msg: 'Nota actualizada correctamente',
        notas
    })
}


// Eliminar una nota de la BD físicamente
ctrlNotas.deleterutaNotas = async (req, res) => {
    const { id } = req.body;
    
    try {
        
        await Nota.findByIdAndDelete(id)

        res.json({
            msg: 'Tarea eliminada correctamente'
        })
    } catch (error) {
        
        console.log('Error al eliminar nota: ', error)
    }
};

// Cambiar el estado activo de una nota (Eliminación lógica)
ctrlNotas.deleteNotas = async (req, res) => {
    const { id }  = req.body
    const notas = await Nota.findByIdAndUpdate(id, { activo: false }, { new: true });

   //Respuesta
    res.json({
        msg: 'Nota eliminada correctamente',
        notas
    });
}


module.exports = ctrlNotas;