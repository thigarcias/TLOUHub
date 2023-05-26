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
        SELECT * FROM usuario WHERE email = '${email}' AND senha = 'sha2('${senha}', 256),2';
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
        INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('${nome}', '${sobrenome}', '${email}', 'sha2('${senha}', 256),2');
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

// function joel (opcao1, opcao2, opcao3, opcao4, id){
//     var joelBD = `
//     INSERT INTO joelGrafico (opcao1, opcao2, opcao3, opcao4, fkUsuario) VALUES ('${opcao1}', '${opcao2}', '${opcao3}', '${opcao4}', '${id}');
//     `;
//     console.log("Executando a instrução SQL: \n" + joelBD);
//     return database.executar(joelBD);
// }

// function exibirJoel (){
//     var joelBD = `
//     select 
//     (select count(opcao1) from joelGrafico where opcao1 = 1) as Opcao1,
//     (select count(opcao2) from joelGrafico where opcao2 = 1) as Opcao2,
//     (select count(opcao3) from joelGrafico where opcao3 = 1) as Opcao3,
//     (select count(opcao4) from joelGrafico where opcao4 = 1) as Opcao4;
//     `;
//     console.log("Executando a instrução SQL: \n" + joelBD);
//     return database.executar(joelBD);
// }

// function tess (opcao1, opcao2, opcao3, opcao4, id){
//     var tessBD = `
//     INSERT INTO tessGrafico (opcao1, opcao2, opcao3, opcao4, fkUsuario) VALUES ('${opcao1}', '${opcao2}', '${opcao3}', '${opcao4}', '${id}');
//     `;
//     console.log("Executando a instrução SQL: \n" + tessBD);
//     return database.executar(tessBD);
// }

// function exibirTess (){
//     var tessBD = `
//     select 
//     (select count(opcao1) from tessGrafico where opcao1 = 1) as Opcao1,
//     (select count(opcao2) from tessGrafico where opcao2 = 1) as Opcao2,
//     (select count(opcao3) from tessGrafico where opcao3 = 1) as Opcao3,
//     (select count(opcao4) from tessGrafico where opcao4 = 1) as Opcao4;
//     `;
//     console.log("Executando a instrução SQL: \n" + tessBD);
//     return database.executar(tessBD);
// }

// function riley (opcao1, opcao2, opcao3, opcao4, id){
//     var rileyBD = `
//     INSERT INTO rileyGrafico (opcao1, opcao2, opcao3, opcao4, fkUsuario) VALUES ('${opcao1}', '${opcao2}', '${opcao3}', '${opcao4}', '${id}');
//     `;
//     console.log("Executando a instrução SQL: \n" + rileyBD);
//     return database.executar(rileyBD);
// }

// function exibirRiley (){
//     var rileyBD = `
//     select 
//     (select count(opcao1) from rileyGrafico where opcao1 = 1) as Opcao1,
//     (select count(opcao2) from rileyGrafico where opcao2 = 1) as Opcao2,
//     (select count(opcao3) from rileyGrafico where opcao3 = 1) as Opcao3,
//     (select count(opcao4) from rileyGrafico where opcao4 = 1) as Opcao4;
//     `;
//     console.log("Executando a instrução SQL: \n" + rileyBD);
//     return database.executar(rileyBD);
// }

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

module.exports = {
    entrar,
    cadastrar,
    listar,
    verificar,
    enviarDados,
    exibirDados,
    receberTudo
};