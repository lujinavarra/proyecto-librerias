const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Usuario = sequelize.define('Usuarios',{
    
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Usuario;