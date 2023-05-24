const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const  Libreria  = require('./libreria');

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
    library_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},
{
    tableName: 'Libros',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deletedAt',
    paranoid: true, //este método realiza la eliminación lógica para que el metodo destroy lo marque como eliminado
    timestamps: true, //el paranoid requiere timestamps en true
},
);

Libreria.hasMany(Libro, {foreignKey: 'library_id', onDelete: 'CASCADE', hooks: true });
Libro.belongsTo(Libreria, {foreignKey: 'library_id',onDelete: 'CASCADE', hooks: true });

module.exports = Libro;