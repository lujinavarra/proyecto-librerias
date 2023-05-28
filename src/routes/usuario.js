const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const {usuarioController} = require ("../controllers");
const { authMiddleware, authIsAdmin} = require("../middleware/authentication-jwt");

router.get ('/', usuarioController.getUsuarios);

router.get ('/:idUsuario', usuarioController.getUsuario)

router.post ('/',
    [body('username', 'El usuario ingresado no es válido').exists().isLength({min:5}),
    body('firstname', 'El nombre no es válido').exists().isLength({min:4}),
    body('lastname', 'El apellido no es válido').exists().isLength({min:4}),
    body('role', 'El rol no es válido').exists().isLength({min:5}),
    body('password', 'El password no es válido').exists().isLength({min:8})],
    authMiddleware, usuarioController.createUsuario);

router.put("/:idUsuario",
    [body('username', 'El usuario ingresado no es válido').exists().isLength({min:5}),
    body('firstname', 'El nombre no es válido').exists().isLength({min:4}),
    body('lastname', 'El apellido no es válido').exists().isLength({min:4}),
    body('role', 'El rol no es válido').exists().isLength({min:5}),
    body('password', 'El password no es válido').exists().isLength({min:8})],
    authMiddleware, usuarioController.updateUsuario);

router.delete("/:idUsuario", authMiddleware, authIsAdmin, usuarioController.deleteUsuario);

module.exports = router;