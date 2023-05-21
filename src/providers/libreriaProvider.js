const { Op } = require("sequelize");
const { Libreria, Libro } = require("../models");

const createlibreria = async (atributoslibreria) => {
    try {
        const newlibreria = await Libreria.create(atributoslibreria);
        // const libro = await Libro.create({ LibreriaId: newlibreria.id , isbn: "123", 
        //     titulo: "hola", 
        //     autor: "lu", 
        //     year: "1800"});
        return newlibreria;
    }catch (error) {
    throw error;
    }
};

const getlibreria = async (id) => {
    try {
        const libreria = await Libreria.findByPk(id, { include: [{ all: true }] });
        if (libreria) {
            return libreria;
        } else {
            throw new Error("libreria no encontrada");
        }
    } catch (error) {
        throw error;
    }
};

const getlibrerias = async (condiciones) => {
    try {
        let opciones = { include: [{ all: true }] };
        if (condiciones) {
            opciones = { ...opciones, where: { [Op.or]: condiciones } };
        }
        const librerias = await Libreria.findAll(opciones);

        if (librerias) {
            return librerias;
        } else {
        throw new Error(
            "No se encontraron librerias con estas condiciones de busqueda"
        );
    }
    } catch (error) {
        throw error;
    }
};

const updatelibreria = async (idlibreria, atributos) => {
    try {
        await getlibreria(idlibreria);
        const [numRowsUpdated] = await Libreria.update(atributos, {
        where: { id: idlibreria },
        });
        console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
        return Libreria.findByPk(idlibreria);
    } catch (error) {
        throw error;
    }
};

const deletelibreria = async (idlibreria) => {
    try {
        return Libreria.destroy({ where: { id: idlibreria } });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createlibreria,
    deletelibreria,
    getlibreria,
    getlibrerias,
    updatelibreria,
};