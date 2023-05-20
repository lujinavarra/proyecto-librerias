const libroService = { getLibro, getLibros, createLibro, updateLibro, deleteLibro } = require("./libro");
const libreriaService = { getlibreria, getlibrerias, createlibreria, updatelibreria, deletelibreria } = require("./libreria");

//const libroService = {getLibro, getLibros, createLibro, updateLibro, deleteLibro};
//const libreriaService = { getlibreria, getlibrerias, createlibreria, updatelibreria, deletelibreria }; 
module.exports = {libreriaService, libroService}

// module.exports = {
//     libroService : {getLibro, getLibros, createLibro, updateLibro, deleteLibro},
//     libreriaService: {getlibreria, getlibrerias, createlibreria, updatelibreria, deletelibreria},
// };