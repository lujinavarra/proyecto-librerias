const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {libroController} = require ("../controllers");
const { authMiddleware, authIsAdmin } = require("../middleware/authentication-jwt");

router.get ("/", libroController.getLibros);

router.get ("/:idLibro", libroController.getLibro)

router.post ("/",
    [body('titulo', 'El título no es válido').exists().isLength({min:4}),
    body('autor', 'El autor no es válido').exists().isLength({min:4}),
    body('year', 'El año no es válido').exists().isLength({min:4}),
    body('isbn', 'El isbn no es válido').exists().isNumeric()],
    authMiddleware, libroController.createLibro)

router.put("/:idLibro",
    [body('titulo', 'El título no es válido').exists().isLength({min:4}),
    body('autor', 'El autor no es válido').exists().isLength({min:4}),
    body('year', 'El año no es válido').exists().isLength({min:4}),
    body('isbn', 'El isbn no es válido').exists().isNumeric()],
    authMiddleware, libroController.updateLibro);

router.delete("/:idLibro", authMiddleware, authIsAdmin, libroController.deleteLibro);

module.exports = router;