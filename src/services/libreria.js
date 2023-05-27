const libreriaProvider = require('../providers/libreriaProvider');


const getlibrerias = async (opciones) =>{
    return await libreriaProvider.getlibrerias(opciones);
};

const getlibreria = async (id) => {
    return await libreriaProvider.getlibreria(id);
};

const createlibreria = async (libreria) => {
    return await libreriaProvider.createlibreria(libreria);
};

const updatelibreria = async (id, libreria) => {
    return await libreriaProvider.updatelibreria(id, libreria);
};

const deletelibreria = async (id) => {
    return await libreriaProvider.deletelibreria(id);
};

module.exports = { getlibreria, getlibrerias, createlibreria, updatelibreria, deletelibreria };