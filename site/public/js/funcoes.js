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
    const 

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

// Depois do cadastro ter terminado, ele vem para essa função e ele limpa a sessionStorage, que estava armezando os dados de cadastro que você inseriu na página, após isso ele te joga para  a página de Login

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    setInterval ((function (){
        window.location = "../Login/login.html";
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

