const { Op } = require("sequelize");
const { Libro } = require("../models");

const createLibro = async (atributosLibro) => {
    try {
        const newLibro = await Libro.create(atributosLibro);
        return newLibro;
    }catch (error) {
    throw error;
    }
};

const getLibro = async (id) => {
    try {
        const libro = await Libro.findByPk(id, { include: [{ all: true }] });
        if (libro) {
            return libro;
        } else {
            throw new Error("Libro no encontrado");
        }
    } catch (error) {
        throw error;
    }
};

const getLibros = async (condiciones) => {
    try {
        let opciones = { include: [{ all: true }] };
        if (condiciones) {
            opciones = { ...opciones, where: { [Op.or]: condiciones } };
        }
        const libros = await Libro.findAll(opciones);

        if (libros) {
            return libros;
        } else {
        throw new Error(
            "No se encontraron libros con estas condiciones de busqueda"
        );
    }
    } catch (error) {
        throw error;
    }
};

const updateLibro = async (idLibro, atributos) => {
    try {
        await getLibro(idLibro);
        const [numRowsUpdated] = await Libro.update(atributos, {
        where: { id: idLibro },
        });
        console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
        return Libro.findByPk(idLibro);
    } catch (error) {
        throw error;
    }
};

const deleteLibro = async (idLibro) => {
    try {
        return Libro.destroy({ where: { id: idLibro } });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createLibro,
    deleteLibro,
    getLibro,
    getLibros,
    updateLibro,
};