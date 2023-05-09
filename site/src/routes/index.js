var express = require("express");
var router = express.Router();

// Essa variavel é utilizada para o script reconhecer caminhos
var path = require("path");

// Aqui ele envia para o GET o arquivo home.html no diretorio raiz
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/PaginaInicial/home.html"));
});

// Função para setar o diretorio raiz do index, assim ele conseguirá carregar o CSS e o JS das paginas
router.use(express.static(path.join(__dirname, "../../public/")));

module.exports = router;