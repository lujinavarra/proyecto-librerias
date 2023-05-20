const usuarioProvider = require('../providers/usuarioProvider');


const getUsuarios = async (opciones) =>{
    return await usuarioProvider.getUsuarios(opciones);
};

const getUsuario = async (id) => {
    return await usuarioProvider.getUsuario(id);
};

const createUsuario = async (usuario) => {
    return await usuarioProvider.createUsuario(usuario);
};

const updateUsuario = async (id, usuario) => {
    return await usuarioProvider.updateUsuario(id, usuario);
};

const deleteUsuario = async (id) => {
    return await usuarioProvider.deleteUsuario(id);
};

const queryusuario = (usuario) => {};

module.exports = { getUsuario, getUsuarios, createUsuario, updateUsuario, deleteUsuario };
