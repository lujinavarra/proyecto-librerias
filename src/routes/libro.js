const express = require('express');
const router = express.Router();
//const libroService = require('../services/libro');
const {libroController} = require ("../controllers");
const { authMiddleware } = require("../middleware/authentication-jwt");

router.get ("/", libroController.getLibros);

router.get ("/:idLibro", libroController.getLibro)

router.post ("/", authMiddleware, libroController.createLibro);

router.put("/:idLibro", authMiddleware, libroController.updateLibro);

router.delete("/:idLibro", authMiddleware, libroController.deleteLibro);

module.exports = router;