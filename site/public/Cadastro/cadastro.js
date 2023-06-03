primeiroNome.value = "Thiago"
sobrenome.value = "Garcia"
email.value = "thiagogarcia526@gmail.com"
senha.value = "12345678"
confirmarSenha.value = '12345678'

window.addEventListener("keyup", capturarTecla)
function capturarTecla(event) {
      if (event.key === "Enter") {
        cadastrar();
      }
}

const criarConta = document.getElementById("criarConta")
const homepagetexto = document.getElementById("homepagetexto")
const logintexto = document.getElementById("logintexto")

criarConta.addEventListener("mouseover", function () {
    criarConta.style.backgroundColor = "#5D8357"
}),

    criarConta.addEventListener("mouseout", function () {
        criarConta.style.backgroundColor = "#448D19"
    }),

    homepagetexto.addEventListener("mouseover", function () {
        homepagetexto.style.color = "#60844B"
    }),

    homepagetexto.addEventListener("mouseout", function () {
        homepagetexto.style.color = "#9b9595cb"
    })

logintexto.addEventListener("mouseover", function () {
    logintexto.style.color = "#60844B"
}),

    logintexto.addEventListener("mouseout", function () {
        logintexto.style.color = "#9b9595cb"
    })

homepagetexto.addEventListener("click", function () {
    window.location.href = "../PaginaInicial/home.html"
})

logintexto.addEventListener("click", function () {
    window.location.href = "../Login/login.html"
})

entre.addEventListener("click", function () {
    window.location.href = "../Login/login.html"
})




/* PARTE DA API */
const msgErro = document.getElementById("msgErro")

function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = primeiroNome.value;
    var sobrenomeVar = sobrenome.value
    var emailVar = email.value;
    var senhaVar = senha.value;
    var confirmacaoSenhaVar = confirmarSenha.value;

    
    // Validações de Cadastro

    // msgErro é uma div dentro do meu site que exibe uma mensagem de erro, por padrão é msgErro é display: none
    // finalizarAguardar() fica no funcoes.js
    if (nomeVar == "" || sobrenomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        msgErro.style.display = "block"
        msgErro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }
   else if (emailVar.indexOf("@") == -1) {
        msgErro.style.display = "flex"
        msgErro.innerHTML = "(O email deve conter @)"
        finalizarAguardar();
        return false;
    } else if (senhaVar.length < 6) {
        msgErro.style.display = "block"
        msgErro.innerHTML = "(A senha deve conter no minimo 6 caracteres)"
        finalizarAguardar();
        return false;
    } else if (senhaVar !== confirmacaoSenhaVar) {
        msgErro.style.display = "block"
        msgErro.innerHTML = "(As senhas nao coincidem!)"
        finalizarAguardar();
        return false;
    }

    // Intervalo para sumir a mensagem de erro em ms, essa função se encontra no final do script
    else {
        setInterval(sumirMensagem, 5000)
    }

    // FETCH: Nada mais é que uma "requisição feita pelo servidor com base na interação do usuario"
    // Antes do fetch de cadastro, existe um fetch de verificação, na qual vai até o banco de dados, pega o que você requisitou, no caso o email e retorna se esse valor existe ou não
        fetch("/usuarios/verificar", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
        })
        })
        .then(function (resposta) {
        console.log("resposta: ", resposta);

        // Se a resposta retornada obtiver o status 204, ele entra dentro do if e exibe a mensagem
        if (resposta.status == 204) {
            msgErro.innerHTML = `O email ja esta cadastrado!`
            setInterval(sumirMensagem, 5000)
        }

        // Caso ele retorne outro valor de status, ele prossegue com o cadastro, inicializando outro fetch
        else {
            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    nomeServer: nomeVar,
                    sobrenomeServer: sobrenomeVar,
                    emailServer: emailVar,
                    senhaServer: senhaVar,
                    confirmarSenhaServer: confirmacaoSenhaVar
                })
            }).then(function (resposta) {
                
                console.log("resposta: ", resposta);
                
                // Aqui basicamente ele ta enviando uma request pro meu servidor verificando se o insert na tabela foi TRUE
                if (resposta.ok) {
                    
                    // Mensagem de Errro
                    // cardErro.style.display = "block";
                    
                    // mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                    
                    // "=>" é uma abreviação para função, aqui basicamente ele após validar o cadastro, ele te redireciona para pagina de login em 500ms
                    setTimeout(() => {
                        window.location = "../Login/login.html";
                    }, "500")
                    
                    
                    // Ambas funções estão explicadas lá na funcoes.js
                    limparSessao();
                    finalizarAguardar();
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                // finalizarAguardar();
            });
            //     }
            // })
            
            return false;
        }

    })
    .catch(function (erro) {
        console.log(`O email ja tem cadastro: ${erro}`);
    });
    
      } 
    
// Some a mensagem
function sumirMensagem() {
    msgErro.innerHTML = ''
}