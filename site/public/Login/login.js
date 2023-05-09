email.value = "thiagogarcia526@gmail.com"
senha.value = "12345678"

const criarConta = document.getElementById("criarConta")
const homepagetexto = document.getElementById("homepagetexto")
const cadastrotexto = document.getElementById("cadastrotexto")
const entre = document.getElementById("entre")

criarConta.addEventListener("mouseover", function(){
    criarConta.style.backgroundColor = "#5D8357"
}),

criarConta.addEventListener("mouseout", function(){
    criarConta.style.backgroundColor = "#448D19"
}),

homepagetexto.addEventListener("mouseover", function(){
    homepagetexto.style.color = "#60844B"
}),

homepagetexto.addEventListener("mouseout", function(){
    homepagetexto.style.color = "#9b9595cb"
})

cadastrotexto.addEventListener("mouseover", function(){
    cadastrotexto.style.color = "#60844B"
}),

cadastrotexto.addEventListener("mouseout", function(){
    cadastrotexto.style.color = "#9b9595cb"
})

homepagetexto.addEventListener("click", function(){
    window.location.href = "../PaginaInicial/home.html"
})

entre.addEventListener("click", function(){
    window.location.href = "../Cadastro/cadastro.html"
})

cadastrotexto.addEventListener("click", function(){
    window.location.href = "../Cadastro/cadastro.html"
})



/* PARTE DA API */
function entrar() {

    var emailVar = email.value;
    var senhaVar = senha.value;

    if (emailVar == "" || senhaVar == "") {
        msgErro.style.display = "block"
        msgErro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "../PaginaInicial/home.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}
