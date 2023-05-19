const express = require('express');
const router = express.Router();
const libroService = require('../services/libro')


router.get('/', async (req, res) => {
    const { titulo, autor } = req.query;
    try {
        let libros;
        if (Object.keys(req.query).length !== 0) {
            libros = await libroService.getLibros({
                ...(titulo && { titulo }),
                ...(autor && { autor }),
        }); // Esto sólo va a agregar los campos si vinieron en la query
        } else {
            libros = await libroService.getLibros();
        }

        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get("/:idLibro", async (req, res) => {
    // const reqLibro = req.libro;
    const idLibro = req.params.idLibro;
    try {
        const libro = await libroService.getLibro(idLibro);
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const { isbn, titulo, autor, year, library } = req.body;
    try {
        const newLibro = await libroService.createLibro({
            isbn, 
            titulo, 
            autor, 
            year, 
            library
        });
        res.status(201).json(newLibro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:idLibro", async (req, res) => {
    const idLibro = req.params.idLibro;
    const { isbn, titulo, autor, year, library} = req.body;
    try {
        const newLibro = await libroService.updateLibro(idLibro, {
            isbn, 
            titulo, 
            autor, 
            year, 
            library
    });
        res.status(200).json(newLibro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;