const express = require('express');
const app = express();
const PORT = 3000;
const {libroRouter, libreriaRouter, usuarioRouter, verificarUsuarioRouter}= require('./routes');
const bodyParser = require ("body-parser");
const { initializeDB } = require("./config/dbConfig");
const { logging } = require("./middleware");
const { authMiddleware } = require("./middleware/authentication-jwt");
app.use(bodyParser.json());

app.use(logging);
app.use('/libro', libroRouter);
app.use('/libreria', libreriaRouter);
app.use('/usuario', usuarioRouter);
app.use("/login", verificarUsuarioRouter);

app.listen(PORT, async () => {
    await initializeDB();
    console.log(`Hello world! Escuchando peticiones en el puerto: ${PORT}`
    );
});
