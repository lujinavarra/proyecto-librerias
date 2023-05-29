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
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},
{
    tableName: 'Usuarios',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deletedAt',
    defaultScope: {
        attributes: {
            exclude: ['password']//para no mostar el valor de la pass cuando se realiza una consulta
        },
    },
    paranoid: true, //este método realiza la eliminación lógica para que el metodo destroy lo marque como eliminado
    timestamps: true, //el paranoid requiere timestamps en true
},
);

module.exports = Usuario;