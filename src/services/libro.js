const libroProvider = require('../providers/libroProvider');


const getLibros = async (opciones) =>{
    return await libroProvider.getLibros(opciones);
};

const getLibro = async (id) => {
    return await libroProvider.getLibro(id);
};

const createLibro = async (libro) => {
    return await libroProvider.createLibro(libro);
};

const updateLibro = async (id, libro) => {
    return await libroProvider.updateLibro(id, libro);
};

const deleteLibro = async (id) => {
    return await libroProvider.deleteLibro(id);
};

const queryLibro = (libro) => {};

module.exports = { getLibro, getLibros, createLibro, updateLibro, deleteLibro };
