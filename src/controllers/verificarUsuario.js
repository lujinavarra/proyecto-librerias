const services = require('../services')
const { verificarUsuarioService } = services;
const jwt = require("jsonwebtoken");
const { secret } = require("../middleware/authentication-jwt");

const verificarUsuario = async (req, res) => {
    const { username, password } = req.body;
    // Verificación de que los datos del usuario son correctos
        if (username === "Admin" && password === "Admin") {
            const token = jwt.sign({ username, role: "Admin" }, secret);
            res.json({ token });
        } else {
            const dbUser = await verificarUsuarioService.validateUsuario(username, password);

        if (dbUser) {
            const token = jwt.sign({ username: dbUser.username }, secret);
            res.json({ token });
        } else {
            res.status(401).json({ message: "Autenticación fallida" });
        }
        }
};

module.exports = {verificarUsuario}