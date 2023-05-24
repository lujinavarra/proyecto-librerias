const services = require('../services')
const {usuarioService} = services;

const createUsuario = async (req, res) => {
    const { username, firstname, lastname, role, password } = req.body;
    try {
        const newUsuario = await usuarioService.createUsuario({
            username, 
            firstname, 
            lastname, 
            role, 
            password
        });
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUsuarios = async (req, res) => {
    const { username, role } = req.query;
    try {
        let usuarios;
        if (Object.keys(req.query).length !== 0) {
            usuarios = await usuarioService.getUsuarios({
                ...(username && { username }),
                ...(role && { role }),
                
        }); // Esto sólo va a agregar los campos si vinieron en la query
        } else {
            usuarios = await usuarioService.getUsuarios();
        
        }

        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUsuario = async (req, res) => {
    const idUsuario = req.params.idUsuario;
    try {
        const usuario = await usuarioService.getUsuario(idUsuario);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUsuario = async (req, res) => {
    const idUsuario = req.params.idUsuario;
    const { username, firstname, lastname, role, password } = req.body;
    try {
        const newUsuario = await usuarioService.updateUsuario(idUsuario, {
            username, 
            firstname, 
            lastname, 
            role, 
            password
    });
        res.status(200).json(newUsuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUsuario = async (req, res) => {
    const idUsuario = req.params.idUsuario;
    try {
        const usuario = await usuarioService.deleteUsuario(idUsuario);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {createUsuario, getUsuarios, getUsuario, updateUsuario, deleteUsuario}