
# Proyecto integrador de NODEJS

Se realizó una API-REST que permite realizar CRUD de los modelos Libreria, Libro y Usuario.
Para desarrollar dicha aplicación se utilizó NODE, un entorno de ejecución de código abierto y multiplataforma del lado del servidor. 
Cuando comenzamos a crear el proyecto ejecutamos el comando npm init, y se comenzaron a instalar las dependencias necesarias para desarrollarlo.
Estas dependencias permiten realizar un sistema escalable, seguro, fácil de manejar y de almacenar datos entre otras funciones.
El diseño de la API es del tipo de Modelos, Vistas, Controladores. Permite que el controlador interactúe con los modelos y las vistas, las cuales interactúan con el usuario, y a través del controlador se comunica con la información del modelo.
En este caso, se estructuró el proyecto de la siguiente forma:   
- Models:  se crean las tablas necesarias para el modelo. Las tablas libreria y libro se realizaron siguiendo el enunciado del ejercicio. En el modelo Usuario se definieron los siguientes campos:
        - Id, que se genera en forma automática y se autoincrementa sola
        - Username, campo único, para que cuando se creen los usuarios no se repita
        - Firstname, lastname, role, phone: campos para tener información sobre el usuario
        - Password, para que el usuario proteja su sesión. Esta configurado para que al ejecutar una búsqueda de los usuarios esta no sea visible.
Las 3 tablas fueron armadas de tal forma que al eliminar un registro este se borre de forma lógica, y continúe existiendo en la base de datos (con posibilidad de recuperarlo si es necesario). También se estructuró para efectuar la eliminación en cascada de las tablas relacionadas.
Para poder comenzar a utilizar el sistema es necesario loguearse con Username y Password "admin" con el fin de que nos genere el token, y poder cargar los primeros usuarios, tanto como libros y librerias. Solo el usuario admin podrá realizar la eliminación de datos, mientras que los otros usuarios pueden acceder al resto de las funciones.
- Router: definición de las distintas rutas. Para las rutas que se ingresan datos se implementaron validaciones previas a la llegada de estos a la BD, con el fin de que no lleguen datos corruptos.
- Providers: es aquí donde las funciones entran en contacto directamente con la BD. Por medio de ellas se pueden realizar el CRUD de las 3 tablas.
- Middleware: la función principal es manejar la seguridad del sistema, analizar si el usuario cumple con los requisitos para obtener un token, que permisos tiene o no, y en base a eso lo deja loguearse, o no le da permiso.
- Controller: se encarga de capturar los datos ingresados por el usario, validarlos, e informar si ocurrió algun error, caso contrario ejecuta la acción de la función que fue llamada
- Service: traemos todas las funciones que fueron creadas en Providers y luego las exportamos para ser utilizadas desde donde se llamen a las mismas.

## Autores

- [@lhibarra](https://github.com/lhibarra)
- [@lujinavarra](https://github.com/lujinavarra)

## Ejecución

Para ejecutar el proyecto se debe ejecutar el comando

```bash
    node app.js
```


## Herramientas Utilizadas



**Server:** Node, Express, Passport, Body-Parser, Jsonwebtoken, Passport-jwt, Sequelize, Sqlite3