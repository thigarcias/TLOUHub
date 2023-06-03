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

function enviarDados (req, res){
    var opcao1 = req.body.opcao1Server;
    var opcao2 = req.body.opcao2Server;
    var opcao3 = req.body.opcao3Server;
    var opcao4 = req.body.opcao4Server;
    var id = req.body.idServer;
    var personagemFavorito = req.body.personagemFavoritoServer
    if (opcao1 == undefined && opcao2 == undefined && opcao3 == undefined && opcao4 == undefined && id == undefined && personagemFavorito == undefined) {        
        res.status(400).send("Suas opções estão undefined!");
    }
    else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.enviarDados(opcao1, opcao2, opcao3, opcao4, id, personagemFavorito)
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

function exibirDados (req, res){
    var personagemFavorito = req.body.personagemFavoritoServer
        usuarioModel.exibirDados(personagemFavorito)
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

function atualizarDados(req, res) {
    // Recebe as inputs aqui postas no JS da pagina de Login
    var nome = req.body.nomeServer
    var sobrenome = req.body.sobrenomeServer
    var id = req.body.idServer
    if (nome == undefined || sobrenome == undefined || id == undefined) {
        res.status(400).send("Seus dados estão indefinido!");
    } else {
        
        usuarioModel.atualizarDados(nome, sobrenome, id)
            .then(
                function (resultado) {
                        console.log(`\nResultados encontrados: ${resultado.length}`);
                        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                        console.log(resultado);
                        res.json(resultado[0]);
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

function jaRespondeu(req, res) {

    // Recebe as inputs aqui postas no JS da pagina de Login
    var id = req.body.idServer;

    if (id == undefined) {
        res.status(400).send("Seu email está indefinido!");
     } else {
        
        usuarioModel.jaRespondeu(id)
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).send("O quiz ja foi respondido!")
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

function verificarCurtida (req, res){
    var idUsuario = req.body.idUsuarioServer
        usuarioModel.verificarCurtida(idUsuario)
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


function enviarCurtida(req, res) {
    // Recebe as inputs aqui postas no JS da pagina de Cadastro
    var curtidaEP1 = req.body.curtidaEP1Server;
    var curtidaEP2 = req.body.curtidaEP2Server;
    var curtidaEP3 = req.body.curtidaEP3Server;
    var curtidaEP4 = req.body.curtidaEP4Server;
    var curtidaEP5 = req.body.curtidaEP5Server;
    var curtidaEP6 = req.body.curtidaEP6Server;
    var curtidaEP7 = req.body.curtidaEP7Server;
    var curtidaEP8 = req.body.curtidaEP8Server;
    var curtidaEP9 = req.body.curtidaEP9Server;
    var id = req.body.idServer;
    var jacurtiu = req.body.jaCurtiuServer
    // Faça as validações dos valores
    if (curtidaEP1 == undefined || curtidaEP2 == undefined || curtidaEP3 == undefined || curtidaEP4 == undefined || curtidaEP5 == undefined || curtidaEP6 == undefined || curtidaEP7 == undefined || curtidaEP8 == undefined || curtidaEP9 == undefined || id == undefined || jacurtiu == undefined)  {
        res.status(400).send("Suas curtidas está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.enviarCurtida(curtidaEP1, curtidaEP2, curtidaEP3, curtidaEP4, curtidaEP5, curtidaEP6, curtidaEP7, curtidaEP8, curtidaEP9, id, jacurtiu)
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

function verificarSenha (req, res){
    var senha = req.body.senha
    var id = req.body.idServer
        usuarioModel.verificarSenha(senha, id)
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

function atualizarEmailSenha(req, res) {
    // Recebe as inputs aqui postas no JS da pagina de Login
    var email = req.body.emailServer
    var senha = req.body.senhaNovaServer
    var id = req.body.idServer
    if (email == undefined || senha == undefined || id == undefined) {
        res.status(400).send("Seus dados estão indefinido!");
    } else {
        
        usuarioModel.atualizarEmailSenha(email, senha, id)
            .then(
                function (resultado) {
                        console.log(`\nResultados encontrados: ${resultado.length}`);
                        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                        console.log(resultado);
                        res.json(resultado[0]);
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

function ranking (req, res){
        usuarioModel.ranking()
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
    enviarDados,
    exibirDados,
    receberTudo,
    atualizarDados,
    jaRespondeu,
    verificarCurtida,
    enviarCurtida,
    verificarSenha,
    atualizarEmailSenha,
    ranking
}