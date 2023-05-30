var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = sha2('${senha}', 256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, sobrenome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('${nome}', '${sobrenome}', '${email}', sha2('${senha}', 256));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email);

    var verificacao = `
        SELECT * FROM usuario WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + verificacao);
    return database.executar(verificacao);
}

function enviarDados (opcao1, opcao2, opcao3, opcao4, id, personagemFavorito){
    var instrucao = `
    INSERT INTO respostasGrafico (personagemFavorito, opcao1, opcao2, opcao3, opcao4, fkUsuario) VALUES ('${personagemFavorito}', '${opcao1}', '${opcao2}', '${opcao3}', '${opcao4}', '${id}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirDados (personagemFavorito){
    var instrucao = `
    select 
    (select count(opcao1) from respostasGrafico where opcao1 = 1 and personagemFavorito = '${personagemFavorito}') as Opcao1,
    (select count(opcao2) from respostasGrafico where opcao2 = 1 and personagemFavorito = '${personagemFavorito}') as Opcao2,
    (select count(opcao3) from respostasGrafico where opcao3 = 1 and personagemFavorito = '${personagemFavorito}') as Opcao3,
    (select count(opcao4) from respostasGrafico where opcao4 = 1 and personagemFavorito = '${personagemFavorito}') as Opcao4;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function receberTudo (){
    var instrucao = `
    select
    (select count(*) from respostasGrafico where personagemFavorito = 'ellie') as Ellie,
    (select count(*) from respostasGrafico where personagemFavorito = 'joel') as Joel,
    (select count(*) from respostasGrafico where personagemFavorito = 'tess') as Tess,
    (select count(*) from respostasGrafico where personagemFavorito = 'riley') as Riley;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarDados(email, nome, sobrenome, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, nome, sobrenome, id)
    var instrucao = `
    UPDATE usuario SET email = '${email}', nome = '${nome}', sobrenome = '${sobrenome}' WHERE id = ${id}; ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function jaRespondeu(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", id);

    var instrucao = `
        SELECT * FROM respostasGrafico WHERE fkUsuario = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarCurtida (idUsuario){
    var instrucao = `
    select * from rankingEP where fkUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function enviarCurtida(curtidaEP1, curtidaEP2, curtidaEP3, curtidaEP4, curtidaEP5, curtidaEP6, curtidaEP7, curtidaEP8, curtidaEP9, id, jacurtiu) {
    console.log(jacurtiu)
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", curtidaEP1, curtidaEP2, curtidaEP3, curtidaEP4, curtidaEP5, curtidaEP6, curtidaEP7, curtidaEP8, curtidaEP9, id, jacurtiu);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    if (jacurtiu == false){
        var instrucao = `
            INSERT INTO rankingEP (ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, fkUsuario) VALUES ('${curtidaEP1}', '${curtidaEP2}', '${curtidaEP3}', '${curtidaEP4}', '${curtidaEP5}', '${curtidaEP6}', '${curtidaEP7}', '${curtidaEP8}', '${curtidaEP9}', ${id});
        `;
    } else {
        var instrucao = `
            UPDATE rankingEP SET ep1 = ${curtidaEP1}, ep2 = ${curtidaEP2}, ep3 = ${curtidaEP3}, ep4 = ${curtidaEP4}, ep5 = ${curtidaEP5}, ep6 = ${curtidaEP6}, ep7 = ${curtidaEP7}, ep8 = ${curtidaEP8}, ep9 = ${curtidaEP9} WHERE fkUsuario = ${id};`
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    entrar,
    cadastrar,
    listar,
    verificar,
    enviarDados,
    exibirDados,
    receberTudo,
    atualizarDados,
    jaRespondeu,
    verificarCurtida,
    enviarCurtida
};