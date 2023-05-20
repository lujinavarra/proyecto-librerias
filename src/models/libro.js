const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Libro = sequelize.define('Libros',{
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    library: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Libro;