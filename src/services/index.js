const libroService = { 
    getLibro,
    getLibros, 
    createLibro, 
    updateLibro, 
    deleteLibro } = require("./libro");

const libreriaService = { 
    getlibreria, 
    getlibrerias, 
    createlibreria, 
    updatelibreria, 
    deletelibreria } = require("./libreria");
const usuarioService = { 
    getUsuario, 
    getUsuarios, 
    createUsuario, 
    updateUsuario, 
    deleteUsuario } = require('./usuario') ;
const verificarUsuarioService = { validateUsuario } = require ('./verificarUsuario');

module.exports = { libreriaService, libroService, usuarioService, verificarUsuarioService }

