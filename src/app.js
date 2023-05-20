const express = require('express');
const app = express();
const PORT = 3000;
const {libroRouter, libreriaRouter}= require("./routes");
const bodyParser = require ("body-parser");
const { initializeDB } = require("./config/dbConfig");
app.use(bodyParser.json());

app.use("/libro", libroRouter);
app.use('/libreria', libreriaRouter)
app.listen(PORT, async () => {
    await initializeDB();
    console.log(`Hello world! Escuchando peticiones en el puerto: ${PORT}`
    );
});
