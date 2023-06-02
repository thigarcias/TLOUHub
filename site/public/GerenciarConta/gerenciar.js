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
            idServer: idVar
        })
    })

        .then(function (resposta) {


            if (resposta.status == 204) {
            }
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);
                alert("Dados alterados com sucesso :)")
                // resposta.json().then(json => {
                //     console.log(json);
                //     console.log(JSON.stringify(json));

                sessionStorage.SOBRENOME_USUARIO = sobrenomeVar
                sessionStorage.NOME_USUARIO = nomeVar;

                setTimeout(function () {
                    alert("Dados alterados com sucesso! :)");
                }, 1000); // apenas para exibir o loading


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

function atualizarEmailSenha() {
    var emailVar = i_emailnovo.value;
    var senhaAtualVar = i_senhaatual.value
    var senhaNovaVar = i_senhanova.value;
    var senhaConfirmar = i_senhanovaconfirmar.value
    var idVar = sessionStorage.ID_USUARIO

    if (senhaNovaVar.length < 6) {
        msgErro.style.display = "block"
        msgErro.innerHTML = "(A senha deve conter no minimo 6 caracteres)"
        setTimeout(sumirMensagem, 2000)
    } else if (senhaNovaVar !== senhaConfirmar) {
        msgErro.style.display = "block"
        msgErro.innerHTML = "(As senhas nao coincidem!)"
        setTimeout(sumirMensagem, 2000)
    } else {
        fetch("/usuarios/verificarSenha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                senha: senhaAtualVar,
                idServer: idVar
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(json => {
                    // console.log(json);
                    // console.log(JSON.stringify(json));

                    if (json.length == 0) {
                        alert("Essa não é sua senha atual")
                    } else {
                        fetch("/usuarios/atualizarEmailSenha", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                emailServer: emailVar,
                                senhaNovaServer: senhaNovaVar,
                                idServer: idVar
                            })
                        })
                            .then(function (resposta) {
                                if (resposta.ok) {
                                    // resposta.json().then(json => {
                                    //     console.log(json);
                                    //     console.log(JSON.stringify(json));

                                    sessionStorage.EMAIL_USUARIO = emailVar
                                    setTimeout(function () {
                                        alert("Dados alterados com sucesso! :)");
                                    }, 1000); // apenas para exibir o loading


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
                })



            }

        });

    }
}




function sumirMensagem() {
    msgErro.innerHTML = ""
}
