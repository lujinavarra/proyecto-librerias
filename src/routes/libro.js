const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {libroController} = require ("../controllers");
const { authMiddleware } = require("../middleware/authentication-jwt");
const mensaje = "Debe ingresar un valor";

router.get ("/", libroController.getLibros);

router.get ("/:idLibro", libroController.getLibro)




router.post ("/",
    body('titulo').notEmpty().withMessage(mensaje),
    body('autor').notEmpty().withMessage(mensaje),
    body('year').notEmpty().withMessage(mensaje),
    body('isbn').notEmpty().withMessage(mensaje),
    authMiddleware, libroController.createLibro)

router.put("/:idLibro",
    body('titulo').notEmpty().withMessage(mensaje),
    body('autor').notEmpty().withMessage(mensaje),
    body('year').notEmpty().withMessage(mensaje),
    body('isbn').notEmpty().withMessage(mensaje),
    authMiddleware, libroController.updateLibro);

router.delete("/:idLibro", authMiddleware, libroController.deleteLibro);

module.exports = router;