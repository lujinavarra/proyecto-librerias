const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Usuario = sequelize.define('Usuarios',{
    
    username: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
},
{
    tableName: 'Usuarios',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deletedAt',
    paranoid: true, //este método realiza la eliminación lógica para que el metodo destroy lo marque como eliminado
    timestamps: true, //el paranoid requiere timestamps en true
},
);

module.exports = Usuario;