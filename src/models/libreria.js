const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Libreria = sequelize.define('Librerias',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
});

module.exports = Libreria;