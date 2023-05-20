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
        }
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
        return Usuario.destroy({ where: { id: idUsuario } });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUsuario,
    deleteUsuario,
    getUsuario,
    getUsuarios,
    updateUsuario,
};