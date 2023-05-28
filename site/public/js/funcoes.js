// Eu deixei comentado pq essa função só serve para caso vc deseja ir para um "dashboard", por exemplo

function validarSessao() {
    const login_botao = document.getElementById("login_botao")
    const cadastro_botao = document.getElementById("cadastro_botao")
    const idUsuario = document.querySelectorAll(".idUsuario")
    const idUsuarioTexto = document.getElementById("idUsuarioTexto")
    const nomeconta = document.querySelectorAll(".nomeconta")
    const contaemail = document.querySelectorAll(".contaemail")
    const gerenciarconta = document.querySelectorAll(".gerenciarconta")
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    gerenciarconta[0].addEventListener("click", function(){
        window.location = "../GerenciarConta/gerenciar.html"
    })
    if (email == null && nome == null) {
        login_botao.style.display = "flex"
        cadastro_botao.style.display = "flex"
        idUsuario[0].style.display = "none"


    } else {
        login_botao.style.display = "none"
        cadastro_botao.style.display = "none"
        idUsuario[0].style.display = "flex"
        idUsuarioTexto.innerHTML = nome
        nomeconta[0].innerHTML = nome
        contaemail[0].innerHTML = email
        
    }
}

// function validarSessaoNoticia(){
//     var email = sessionStorage.EMAIL_USUARIO;
//     var nome = sessionStorage.NOME_USUARIO;
//     const blurAutenticacao = document.getElementById("blurAutenticacao")
//     const blurTexto = document.getElementById("blurTexto")
//     const blurCadeado = document.getElementById("blurCadeado")
//     const blurCadastro = document.getElementById("blurCadastro")


//     if (email == null && nome == null) {
//         blurAutenticacao.style.display = "flex"
//         blurTexto.style.display = "flex"
//         blurCadeado.style.display = "flex"
//         blurCadastro.style.display = "flex"

//     } else {
//         blurAutenticacao.style.display = "none"
//         blurTexto.style.display = "none"
//         blurCadeado.style.display = "none"
//         blurCadastro.style.display = "none"
//     }
// }

function validarSessaoTLOU1(){
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    const blurQuiz = document.querySelectorAll(".blurQuiz")
    const login_botao = document.getElementById("login_botao")
    const cadastro_botao = document.getElementById("cadastro_botao")
    const idUsuario = document.querySelectorAll(".idUsuario")
    const idUsuarioTexto = document.getElementById("idUsuarioTexto")
    const nomeconta = document.querySelectorAll(".nomeconta")
    const contaemail = document.querySelectorAll(".contaemail")

    const gerenciarconta = document.querySelectorAll(".gerenciarconta")
    gerenciarconta[0].addEventListener("click", function(){
        window.location = "../GerenciarConta/gerenciar.html"
    })

    if (email == null && nome == null) {
        blurQuiz[0].style.display = "flex"
        login_botao.style.display = "flex"
        cadastro_botao.style.display = "flex"
        idUsuario[0].style.display = "none"


    } else {
        blurQuiz[0].style.display = "none"
        login_botao.style.display = "none"
        cadastro_botao.style.display = "none"
        idUsuario[0].style.display = "flex"
        idUsuarioTexto.innerHTML = nome
        nomeconta[0].innerHTML = nome
        contaemail[0].innerHTML = email
        jaRespondeu()
    }
    receberTudo()
}


function jaRespondeu(){
    var idVar = sessionStorage.ID_USUARIO

    fetch("/usuarios/jaRespondeu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idVar
        })
    }).then(function (resposta){
        if (resposta.status == 200){
            blocoQuiz.style.display = "flex";
            botaoGeral.style.display = 'none';
            conteudoDoQuiz.style.display = 'none';
            ellieGrafico.style.display = 'none';
            joelGrafico.style.display = 'none';
            tessGrafico.style.display = 'none';
            rileyGrafico.style.display = 'none';
            todosGrafico.style.display = 'flex';
            grafico_tudo1.update()
        }
        else {
            blocoQuiz.style.display = "none";
            botaoGeral.style.display = 'none';
            conteudoDoQuiz.style.display = 'flex';
            ellieGrafico.style.display = 'none';
            joelGrafico.style.display = 'none';
            tessGrafico.style.display = 'none';
            rileyGrafico.style.display = 'none';
            todosGrafico.style.display = 'none';
        }
    })
}
// Depois do cadastro ter terminado, ele vem para essa função e ele limpa a sessionStorage, que estava armezando os dados de cadastro que você inseriu na página, após isso ele te joga para  a página de Login

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    setInterval ((function (){
        window.location = "../PaginaInicial/home.html";
    }), 1000);

}

function finalizarAguardar(texto) {
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";

    var msgErro = document.getElementById("msgErro");
    if (texto) {
        msgErro.style.display = "block"
        msgErro.innerHTML = texto;
    }
}
