var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

// Adição de uma nova rota "/verificar" que leva pra função no UsuarioController

router.post("/verificar", function (req, res) {
    usuarioController.verificar(req, res);
});

router.post("/ellie", function (req, res) {
    usuarioController.ellie(req, res);
});

router.post("/exibirEllie", function (req, res) {
    usuarioController.exibirEllie(req, res);
});

router.post("/joel", function (req, res) {
    usuarioController.joel(req, res);
});

router.post("/exibirJoel", function (req, res) {
    usuarioController.exibirJoel(req, res);
});

router.post("/tess", function (req, res) {
    usuarioController.tess(req, res);
});

router.post("/exibirTess", function (req, res) {
    usuarioController.exibirTess(req, res);
});

router.post("/riley", function (req, res) {
    usuarioController.riley(req, res);
});

router.post("/exibirRiley", function (req, res) {
    usuarioController.exibirRiley(req, res);
});

router.post("/receberTudo", function (req, res) {
    usuarioController.receberTudo(req, res);
});

module.exports = router;