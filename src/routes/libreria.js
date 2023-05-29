const express = require('express');
const router = express.Router();
const {libreriaController} = require ('../controllers');
const { authMiddleware} = require("../middleware/authentication-jwt");
const {authIsAdmin} = require('../middleware/authentication-jwt')
const { body} = require('express-validator');


//cualquier usuario puede hacer un get para ver los datos
router.get ('/', libreriaController.getlibrerias);

router.get ('/:idlibreria', libreriaController.getlibreria);


//para poder crear una libreria necesita estar autenticado
router.post ('/', 
    [(body('name', 'Nombre no válido').exists().isLength({min:4})),
    body('location', 'Localidad no es válida').exists().isLength({min:4})],
    authMiddleware, libreriaController.createlibreria);


router.put('/:idlibreria',
    [(body('name', 'Nombre no válido').exists().isLength({min:4})),
    body('location', 'Localidad no es válida').exists().isLength({min:4})],
    authMiddleware, libreriaController.updatelibreria);
//para poder hacer un delete debe tener permiso y ser administrador


router.delete('/:idlibreria',  
    authMiddleware, authIsAdmin, libreriaController.deletelibreria);

module.exports = router;