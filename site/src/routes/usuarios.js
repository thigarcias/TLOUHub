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

router.post("/receberTudo", function (req, res) {
    usuarioController.receberTudo(req, res);
});

router.post("/enviarDados", function (req, res) {
    usuarioController.enviarDados(req, res);
});

router.post("/exibirDados", function (req, res) {
    usuarioController.exibirDados(req, res);
});

router.post("/atualizarDados", function (req, res) {
    usuarioController.atualizarDados(req, res);
});

router.post("/jaRespondeu", function (req, res) {
    usuarioController.jaRespondeu(req, res);
});


module.exports = router;