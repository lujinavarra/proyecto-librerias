const services = require('../services')
const {libroService, libreriaService} = services;
const { validationResult } = require('express-validator');

const createLibro = async (req, res) => {
const result = validationResult(req)
    if(!result.isEmpty()){
        console.log(result)
        return  res.status(400).send({errors: result.array})
    }
    const { isbn, titulo, autor, year, library_id} = req.body;
    try { //verificamos que la libreria existe para crear el libro
        const libreria = await libreriaService.getlibreria(library_id);
        if (libreria){
            const newLibro = await libroService.createLibro({
                isbn, 
                titulo, 
                autor, 
                year,
                library_id
            });
            res.status(201).json(newLibro);
        } else{
            throw new Error('No existe la libreria');
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getLibros = async (req, res) => {
    const { titulo, autor, isbn, library_id} = req.query;
    try {
        let libros;
        if (Object.keys(req.query).length !== 0) {
            libros = await libroService.getLibros({
                ...(titulo && { titulo }),
                ...(autor && { autor }),
                ...(isbn && {isbn}),
                ...(library_id && {library_id})
        }); // Esto sólo va a agregar los campos si vinieron en la query
        } else {
            libros = await libroService.getLibros();
        
        }

        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getLibro = async (req, res) => {
    const idLibro = req.params.idLibro;
    try {
        const libro = await libroService.getLibro(idLibro);
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateLibro = async (req, res) => {
    const idLibro = req.params.idLibro;
    const result = validationResult(req)
    if(!result.isEmpty()){
        console.log(result)
        return  res.status(400).send({errors: result.array})
    }
    const { isbn, titulo, autor, year, library_id} = req.body;
    try {
        const newLibro = await libroService.updateLibro(idLibro, {
            isbn, 
            titulo, 
            autor, 
            year, 
            library_id
    });
        res.status(200).json(newLibro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteLibro = async (req, res) => {
    const idLibro = req.params.idLibro;
    try {
        const libro = await libroService.deleteLibro(idLibro);
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {createLibro, getLibros, getLibro, updateLibro, deleteLibro}