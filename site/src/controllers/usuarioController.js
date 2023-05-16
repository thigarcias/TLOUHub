var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {

    // Recebe as inputs aqui postas no JS da pagina de Login
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        console.log(`\nResultados encontrados: ${resultado.length}`);
                        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function verificar(req, res) {
    var email = req.body.emailServer;
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.verificar(email)
        .then(function (resultado) {
            console.log (resultado.length)
            if (resultado.length > 0) {
                res.status(204).send("O email ja foi cadastrado!")
            } else {
                res.status(200).json(resultado);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrar(req, res) {

    // Recebe as inputs aqui postas no JS da pagina de Cadastro
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var confirmarSenha = req.body.confirmarSenhaServer

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined){
        res.status(400).send("Seu sobrenome está undefined!")
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (confirmarSenha == undefined) {
        res.status(400).send("Sua confirmação de senha está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function ellie (req, res){
    var opcao1 = req.body.opcao1Server;
    var opcao2 = req.body.opcao2Server;
    var opcao3 = req.body.opcao3Server;
    var opcao4 = req.body.opcao4Server;
    var id = req.body.idServer;
    if (opcao1 == undefined && opcao2 == undefined && opcao3 == undefined && opcao4 == undefined && id == undefined) {        
        res.status(400).send("Suas opções estão undefined!");
    }
    else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.ellie(opcao1, opcao2, opcao3, opcao4, id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function exibirEllie (req, res){
        usuarioModel.exibirEllie()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function exibirJoel (req, res){
    usuarioModel.exibirJoel()
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function joel (req, res){
    var opcao1 = req.body.opcao1Server;
    var opcao2 = req.body.opcao2Server;
    var opcao3 = req.body.opcao3Server;
    var opcao4 = req.body.opcao4Server;
    var id = req.body.idServer;
    if (opcao1 == undefined && opcao2 == undefined && opcao3 == undefined && opcao4 == undefined && id == undefined) {        
        res.status(400).send("Suas opções estão undefined!");
    }
    else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.joel(opcao1, opcao2, opcao3, opcao4, id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function tess (req, res){
    var opcao1 = req.body.opcao1Server;
    var opcao2 = req.body.opcao2Server;
    var opcao3 = req.body.opcao3Server;
    var opcao4 = req.body.opcao4Server;
    var id = req.body.idServer;
    if (opcao1 == undefined && opcao2 == undefined && opcao3 == undefined && opcao4 == undefined && id == undefined) {
        res.status(400).send("Suas opções estão undefined!");
    }
    else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.tess(opcao1, opcao2, opcao3, opcao4, id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function exibirTess (req, res){
    usuarioModel.exibirTess()
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function riley (req, res){
    var opcao1 = req.body.opcao1Server;
    var opcao2 = req.body.opcao2Server;
    var opcao3 = req.body.opcao3Server;
    var opcao4 = req.body.opcao4Server;
    var id = req.body.idServer;
    if (opcao1 == undefined && opcao2 == undefined && opcao3 == undefined && opcao4 == undefined && id == undefined) {
        res.status(400).send("Suas opções estão undefined!");
    }
    else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.riley(opcao1, opcao2, opcao3, opcao4, id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function exibirRiley (req, res){
    usuarioModel.exibirRiley()
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function receberTudo (req, res){
    usuarioModel.receberTudo()
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    entrar,
    verificar,
    cadastrar,
    listar,
    testar,
    ellie,
    exibirEllie,
    joel,
    exibirJoel,
    tess,
    exibirTess,
    riley,
    exibirRiley,
    receberTudo
}