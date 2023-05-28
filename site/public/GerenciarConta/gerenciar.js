function clickVoltar() {
    window.history.back();
}


var email = sessionStorage.EMAIL_USUARIO
var nome = sessionStorage.NOME_USUARIO
var sobrenome = sessionStorage.SOBRENOME_USUARIO
const i_nome = document.getElementById("i_nome")
const i_sobrenome = document.getElementById("i_sobrenome")
const i_emailnovo = document.getElementById("i_emailnovo")
i_nome.value = nome
i_sobrenome.value = sobrenome
i_emailatual.value = email

function atualizarDados() {

    var nomeVar = i_nome.value;
    var sobrenomeVar = i_sobrenome.value;
    var emailVar = i_emailnovo.value;
    var idVar = sessionStorage.ID_USUARIO

    // FETCH: Nada mais é que uma "requisição feita pelo servidor com base na interação do usuario"
    // Antes do fetch de cadastro, existe um fetch de verificação, na qual vai até o banco de dados, pega o que você requisitou, no caso o email e retorna se esse valor existe ou não

        fetch("/usuarios/atualizarDados", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                sobrenomeServer: sobrenomeVar,
                emailServer: emailVar,
                idServer: idVar
            })
        })

        .then(function (resposta) {

                    
        if(resposta.status == 204) {
      }
            console.log("ESTOU NO THEN DO entrar()!")
    
            if (resposta.ok) {
                console.log(resposta);
                alert("Dados alterados com sucesso :)")
                // resposta.json().then(json => {
                //     console.log(json);
                //     console.log(JSON.stringify(json));
    
                sessionStorage.EMAIL_USUARIO = emailVar;
                sessionStorage.SOBRENOME_USUARIO = sobrenomeVar
                sessionStorage.NOME_USUARIO = nomeVar;
                    
                //     setTimeout(function () {
                //         window.location = "../PaginaInicial/home.html";
                //     }, 1000); // apenas para exibir o loading
    
                // });
    
            } else {
    
                console.log("Houve um erro ao tentar realizar o login!");
    
    
    
                resposta.text().then(texto => {
                    console.error(texto);

                });
            }
    
        }).catch(function (erro) {
            console.log(erro);
        })
    
        return false;
    

}