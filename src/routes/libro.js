const express = require('express');
const router = express.Router();
const libroService = require('../services/libro');
const {libroController} = require ("../controllers");

router.get ("/", libroController.getLibros);

router.get ("/:idLibro", libroController.getLibro)

router.post ("/", libroController.createLibro);

router.put("/:idLibro", libroController.updateLibro);

module.exports = router;