const services = require('../services')
const {libroService} = services;

const createLibro = async (req, res) => {
    const { isbn, titulo, autor, year, library_id} = req.body;
    try {
        const newLibro = await libroService.createLibro({
            isbn, 
            titulo, 
            autor, 
            year,
            library_id
        });
        res.status(201).json(newLibro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getLibros = async (req, res) => {
    const { titulo, autor, isbn } = req.query;
    try {
        let libros;
        if (Object.keys(req.query).length !== 0) {
            libros = await libroService.getLibros({
                ...(titulo && { titulo }),
                ...(autor && { autor }),
                ...(isbn && {isbn}),
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
}

const deleteLibro = async (req, res) => {
    const idLibro = req.params.idLibro;
    // const {eliminado} = req.body;
    try {
        // const libroEliminado = await libroService.updateLibro(idLibro, {
        //     eliminado
        // });
        const libro = await libroService.deleteLibro(idLibro);
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {createLibro, getLibros, getLibro, updateLibro, deleteLibro}