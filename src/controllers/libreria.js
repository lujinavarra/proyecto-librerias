const services = require('../services')
const { libreriaService } = services;

const createlibreria = async (req, res) => {
    const { name, location, telefono} = req.body;
    try {
        const newlibreria = await libreriaService.createlibreria({
            name, 
            location, 
            telefono 
        
        });
        res.status(201).json(newlibreria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getlibrerias = async (req, res) => {
    const { name } = req.query;
    try {
        let librerias;
        if (Object.keys(req.query).length !== 0) {
            librerias = await libreriaService.getlibrerias({
                ...(name && { name }),
                
        }); // Esto sólo va a agregar los campos si vinieron en la query
        } else {
            librerias = await libreriaService.getlibrerias();
        
        }

        res.status(200).json(librerias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getlibreria = async (req, res) => {
    const idlibreria = req.params.idlibreria;
    try {
        const libreria = await libreriaService.getlibreria(idlibreria);
        res.status(200).json(libreria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updatelibreria = async (req, res) => {
    const idlibreria = req.params.idlibreria;
    const { name, location, telefono} = req.body;
    try {
        const newlibreria = await libreriaService.updatelibreria(idlibreria, {
            name, 
            location, 
            telefono 
        
    });
        res.status(200).json(newlibreria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {createlibreria, getlibrerias, getlibreria, updatelibreria}