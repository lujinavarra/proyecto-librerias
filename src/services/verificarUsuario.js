const usuarioProvider = require('../providers/usuarioProvider');

const validateUsuario = async (username, password) => {
    return await usuarioProvider.validateUsuario(username, password);
};

module.exports ={validateUsuario}