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

