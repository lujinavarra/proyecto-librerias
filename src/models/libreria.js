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
},
{
    tableName: 'Librerias',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deletedAt',
    paranoid: true, //este método realiza la eliminación lógica para que el metodo destroy lo marque como eliminado
    timestamps: true, //el paranoid requiere timestamps en true
},
);
module.exports = Libreria;