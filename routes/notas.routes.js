const router = require('express').Router();

//Desestructuro el objeto del archivo de controllers
const {getNotas, postNotas, putNotas, deleteNotas, deleterutaNotas}= require('../controllers/notas.controller')

router.get('/', getNotas)
router.post('/', postNotas )
router.put('/', putNotas )
router.put('/deletenota', deleteNotas)
router.delete('/', deleterutaNotas)

module.exports = router
 