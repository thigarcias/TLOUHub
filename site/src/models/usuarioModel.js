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
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
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
        INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}');
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

module.exports = {
    entrar,
    cadastrar,
    listar,
    verificar,
    enviarDados,
    exibirDados,
    receberTudo,
    atualizarDados,
    jaRespondeu
};