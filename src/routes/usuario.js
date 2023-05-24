const express = require('express');
const router = express.Router();
const {usuarioController} = require ("../controllers");
const { authMiddleware,} = require("../middleware/authentication-jwt");

router.get ("/", usuarioController.getUsuarios);

router.get ("/:idUsuario", usuarioController.getUsuario)

router.post ("/",authMiddleware, usuarioController.createUsuario);

router.put("/:idUsuario", authMiddleware, usuarioController.updateUsuario);

router.delete("/:idUsuario", authMiddleware, usuarioController.deleteUsuario);

module.exports = router;