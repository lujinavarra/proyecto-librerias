const express = require('express');
const router = express.Router();
const {libreriaController} = require ('../controllers');
const { authMiddleware} = require("../middleware/authentication-jwt");
const {authIsAdmin} = require('../middleware/authentication-jwt')
const { body, query} = require('express-validator');
const mensaje = "Debe ingresar un valor";

//cualquier usuario puede hacer un get para ver los datos
router.get ('/', libreriaController.getlibrerias);
router.get ('/:idlibreria',
query('idlibreria').isInt().withMessage('Debe ingresar un valor numérico'), 
libreriaController.getlibreria);



//para poder crear una libreria necesita estar autenticado
router.post ('/',  
body('name').notEmpty().withMessage(mensaje),
body('location').notEmpty().withMessage(mensaje),
body('telefono').notEmpty().withMessage(mensaje),
authMiddleware, libreriaController.createlibreria);

router.put('/:idlibreria',
body('name').notEmpty().withMessage(mensaje),
body('location').notEmpty().withMessage(mensaje),
body('telefono').notEmpty().withMessage(mensaje),
authMiddleware, libreriaController.updatelibreria);
//para poder hacer un delete debe tener permiso y ser administrador


router.delete('/:idlibreria',  
authMiddleware, authIsAdmin, libreriaController.deletelibreria);

module.exports = router;