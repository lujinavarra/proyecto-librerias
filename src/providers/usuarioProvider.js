const { Op } = require("sequelize");
const { Usuario } = require("../models");

const createUsuario = async (atributosUsuario) => {
    try {
        const newUsuario = await Usuario.create(atributosUsuario);
        return newUsuario;
    }catch (error) {
    throw error;
    }
};

const getUsuario = async (id) => {
    try {
        const usuario = await Usuario.findByPk(id, { include: [{ all: true }] });
        // en el caso de que la tabla tenga otra configuración podemos excluir el password como muestra abajo
        //const usuario = await Usuario.findByPk(id, {attributes: {exclude: ['password']}})
        if (usuario) {
            return usuario;
        } else {
            throw new Error("Usuario no encontrado");
        }
    } catch (error) {
        throw error;
    }
};

const getUsuarios = async (condiciones) => {
    try {
        let opciones = { include: [{ all: true }] };
        if (condiciones) {
            opciones = { ...opciones, where: { [Op.or]: condiciones } };
        } // opciones tiene username y/o role, capturado en la url. Op nos permite buscar por distintos operadores logicos
        const usuarios = await Usuario.findAll(opciones);
        
        if (usuarios) {
            return usuarios;
        } else {
        throw new Error(
            "No se encontraron Usuarios con estas condiciones de busqueda"
        );
    }
    } catch (error) {
        throw error;
    }
};

const updateUsuario = async (idUsuario, atributos) => {
    try {
        await getUsuario(idUsuario);
        const [numRowsUpdated] = await Usuario.update(atributos, {
        where: { id: idUsuario },
        });
        console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
        return Usuario.findByPk(idUsuario);
    } catch (error) {
        throw error;
    }
};

const deleteUsuario = async (idUsuario) => {
    try {
        await getUsuario(idUsuario);
        return Usuario.destroy({ where: { id: idUsuario } });
    } catch (error) {
        throw error;
    }
};

const validateUsuario = async (username, password) => {
    try {
    const usuario = await Usuario.findOne({
    where: { username, password },
    });
    if (usuario) {
        return usuario;
    } else {
        return false;
    }
    }catch (error) {
    throw error;
    }
};
module.exports = {
    createUsuario,
    deleteUsuario,
    getUsuario,
    getUsuarios,
    updateUsuario,
    validateUsuario
};