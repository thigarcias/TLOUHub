// Eu deixei comentado pq essa função só serve para caso vc deseja ir para um "dashboard", por exemplo

function validarSessao() {
    const login_botao = document.getElementById("login_botao")
    const cadastro_botao = document.getElementById("cadastro_botao")
    const conta_botao = document.getElementById("conta_botao")
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email == null && nome == null) {
        login_botao.style.display = "flex"
        cadastro_botao.style.display = "flex"
        conta_botao.style.display = "none"


    } else {
        login_botao.style.display = "none"
        cadastro_botao.style.display = "none"
        conta_botao.style.display = "flex"
    }
}

function validarSessaoNoticia(){
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    const blurAutenticacao = document.getElementById("blurAutenticacao")
    const blurTexto = document.getElementById("blurTexto")
    const blurCadeado = document.getElementById("blurCadeado")
    const blurCadastro = document.getElementById("blurCadastro")


    if (email == null && nome == null) {
        blurAutenticacao.style.display = "flex"
        blurTexto.style.display = "flex"
        blurCadeado.style.display = "flex"
        blurCadastro.style.display = "flex"

    } else {
        blurAutenticacao.style.display = "none"
        blurTexto.style.display = "none"
        blurCadeado.style.display = "none"
        blurCadastro.style.display = "none"
    }
}

function validarSessaoTLOU1(){
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    const blurQuiz = document.querySelectorAll(".blurQuiz")
    const login_botao = document.getElementById("login_botao")
    const cadastro_botao = document.getElementById("cadastro_botao")
    const conta_botao = document.getElementById("conta_botao")

    if (email == null && nome == null) {
        blurQuiz[0].style.display = "flex"
        login_botao.style.display = "flex"
        cadastro_botao.style.display = "flex"
        conta_botao.style.display = "none"


    } else {
        blurQuiz[0].style.display = "none"
        login_botao.style.display = "none"
        cadastro_botao.style.display = "none"
        conta_botao.style.display = "flex"
    }



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

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

function finalizarAguardar(texto) {
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";

    var msgErro = document.getElementById("msgErro");
    if (texto) {
        msgErro.style.display = "block"
        msgErro.innerHTML = texto;
    }
}


// modal
// function mostrarModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "flex";
// }

// function fecharModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "none";
// }

