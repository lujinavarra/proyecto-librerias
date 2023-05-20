const express = require('express');
const router = express.Router();
const libreriaService = require('../services/libreria');
const {libreriaController} = require ('../controllers');

router.get ("/", libreriaController.getlibrerias);

router.get ("/:idlibreria", libreriaController.getlibreria)

router.post ("/", libreriaController.createlibreria);

router.put("/:idlibreria", libreriaController.updatelibreria);

module.exports = router;