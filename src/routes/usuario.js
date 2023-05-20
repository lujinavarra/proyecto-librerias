const express = require('express');
const router = express.Router();
//const libroService = require('../services/libro');
const {usuarioController} = require ("../controllers");

router.get ("/", usuarioController.getUsuarios);

router.get ("/:idUsuario", usuarioController.getUsuario)

router.post ("/", usuarioController.createUsuario);

router.put("/:idLibro", usuarioController.updateUsuario);

module.exports = router;