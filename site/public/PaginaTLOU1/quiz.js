/* QUIZ */
ellieResposta = {
    pergunta: 'VOCÊ ESCOLHEU A ELLIE, POIS:',
    opcao1: 'ELA É DETERMINADA',
    opcao2: 'ELA É CORAJOSA',
    opcao3: 'ELA É LEAL',
    opcao4: 'ELA É CARINHOSA',
    destemida: 0,
    carisma: 0,
    implacavel: 0,
    carinhosa: 0
}
joelResposta = {
    pergunta: 'VOCÊ ESCOLHEU O JOEL, POIS:',
    opcao1: 'ELE É PROTETOR',
    opcao2: 'ELE TEM CARISMA',
    opcao3: 'ELE É DETERMINADO',
    opcao4: 'ELE É COMPASSIVO',
    destemida: 0,
    carisma: 0,
    implacavel: 0,
    carinhosa: 0
}

tessResposta = {
    pergunta: 'VOCÊ ESCOLHEU A TESS, POIS:',
    opcao1: 'ELA É INTELIGENTE',
    opcao2: 'ELA É LEAL',
    opcao3: 'ELA É IMPLACAVEL',
    opcao4: 'ELA É DETERMINADA',
    destemida: 0,
    carisma: 0,
    implacavel: 0,
    carinhosa: 0
}

rileyResposta = {
    pergunta: 'VOCÊ ESCOLHEU A RILEY, POIS:',
    opcao1: 'ELA É AVENTUREIRA',
    opcao2: 'ELA TEM CARISMA',
    opcao3: 'ELA É PROTETORA',
    opcao4: 'ELA É CARINHOSA',
    destemida: 0,
    carisma: 0,
    implacavel: 0,
    carinhosa: 0
}

const quiz = document.querySelectorAll(".quiz")
const opcaoQuiz = document.querySelectorAll(".opcaoQuiz")
const opcaoTexto = document.querySelectorAll('.opcaoTexto')
const blocoQuiz = document.getElementById("blocoQuiz")
const botaoGeral = document.getElementById("botaoGeral")
const conteudoDoQuiz = document.getElementById("conteudoDoQuiz")
const ellieGrafico = document.getElementById("ellieGrafico")
const joelGrafico = document.getElementById("joelGrafico")
const tessGrafico = document.getElementById("tessGrafico")
const rileyGrafico = document.getElementById("rileyGrafico")
const todosGrafico = document.getElementById("todosGrafico")
let etapaAtual = 0;

function atualizarOpcoes(opcao) {
    quiz[0].querySelector('#perguntaQuiz').innerHTML = `${opcao.pergunta}`
    opcaoTexto[0].innerHTML = `${opcao.opcao1}`
    opcaoTexto[1].innerHTML = `${opcao.opcao2}`
    opcaoTexto[2].innerHTML = `${opcao.opcao3}`
    opcaoTexto[3].innerHTML = `${opcao.opcao4}`
}

opcaoQuiz[0].addEventListener("click", function () {
    if (etapaAtual == 'ellie') {
        ellieResposta.destemida++
        enviarEllie(function () {
            setTimeout(function () {
               exibirEllie(function () {
                  setTimeout(function () {
                     blocoQuiz.style.display = "flex";
                     botaoGeral.style.display = 'flex'
                     conteudoDoQuiz.style.display = 'none';
                     ellieGrafico.style.display = 'flex';
                     joelGrafico.style.display = 'none';
                     tessGrafico.style.display = 'none';
                     rileyGrafico.style.display = 'none';
                     todosGrafico.style.display = 'none';
                    
                  }, 500);
               });
            }, 500);
         });
    } else if (etapaAtual == 'joel'){
        joelResposta.destemida++
         enviarJoel(function () {
            setTimeout(function () {
               exibirJoel(function () {
                  setTimeout(function () {
                     blocoQuiz.style.display = "flex";
                     botaoGeral.style.display = 'flex'
                     conteudoDoQuiz.style.display = 'none';
                     ellieGrafico.style.display = 'none';
                     joelGrafico.style.display = 'flex';
                     tessGrafico.style.display = 'none';
                     rileyGrafico.style.display = 'none';
                     todosGrafico.style.display = 'none';
                  }, 500);
               });
            }, 500);
         });

    } else if (etapaAtual == 'tess'){
        tessResposta.destemida++
        enviarTess(function () {
            setTimeout(function () {
               exibirTess(function () {
                  setTimeout(function () {
                     blocoQuiz.style.display = "flex";
                     botaoGeral.style.display = 'flex'
                     conteudoDoQuiz.style.display = 'none';
                     ellieGrafico.style.display = 'none';
                     joelGrafico.style.display = 'none';
                     tessGrafico.style.display = 'flex';
                     rileyGrafico.style.display = 'none';
                     todosGrafico.style.display = 'none';
                  }, 500);
               });
            }, 500);
         });
    } else if (etapaAtual == 'riley'){
        rileyResposta.destemida++
        enviarRiley(function () {
            setTimeout(function () {
               exibirRiley(function () {
                  setTimeout(function () {
                     blocoQuiz.style.display = "flex";
                     botaoGeral.style.display = 'flex'
                     conteudoDoQuiz.style.display = 'none';
                     ellieGrafico.style.display = 'none';
                     joelGrafico.style.display = 'none';
                     tessGrafico.style.display = 'none';
                     rileyGrafico.style.display = 'flex';
                     todosGrafico.style.display = 'none';
                  }, 500);
               });
            }, 500);
         });
    } else {
        atualizarOpcoes(ellieResposta)
        etapaAtual = 'ellie'
    }
}),

opcaoQuiz[1].addEventListener("click", function () {
        if (etapaAtual == 'ellie') {
            ellieResposta.carisma++
            enviarEllie(function () {
                setTimeout(function () {
                   exibirEllie(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex'
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'flex';
                         joelGrafico.style.display = 'none';
                         tessGrafico.style.display = 'none';
                         rileyGrafico.style.display = 'none';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });


        } else if (etapaAtual == 'joel'){
            joelResposta.carisma++
            enviarJoel(function () {
                setTimeout(function () {
                   exibirJoel(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex'
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'none';
                         joelGrafico.style.display = 'flex';
                         tessGrafico.style.display = 'none';
                         rileyGrafico.style.display = 'none';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });

        } else if (etapaAtual == 'tess'){
            tessResposta.carisma++
            enviarTess(function () {
                setTimeout(function () {
                   exibirTess(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex'
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'none';
                         joelGrafico.style.display = 'none';
                         tessGrafico.style.display = 'flex';
                         rileyGrafico.style.display = 'none';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });
        } else if (etapaAtual == 'riley'){
            rileyResposta.carisma++
            enviarRiley(function () {
                setTimeout(function () {
                   exibirRiley(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex'
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'none';
                         joelGrafico.style.display = 'none';
                         tessGrafico.style.display = 'none';
                         rileyGrafico.style.display = 'flex';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });

        }  
        else {
            atualizarOpcoes(joelResposta)
            etapaAtual = 'joel'
        }
    }),

opcaoQuiz[2].addEventListener("click", function () {
        if (etapaAtual == 'ellie') {
            ellieResposta.implacavel++
            enviarEllie(function () {
                setTimeout(function () {
                   exibirEllie(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex'
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'flex';
                         joelGrafico.style.display = 'none';
                         tessGrafico.style.display = 'none';
                         rileyGrafico.style.display = 'none';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });

        } else if (etapaAtual == 'joel'){
            joelResposta.implacavel++
            enviarJoel(function () {
                setTimeout(function () {
                   exibirJoel(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex'
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'none';
                         joelGrafico.style.display = 'flex';
                         tessGrafico.style.display = 'none';
                         rileyGrafico.style.display = 'none';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });

        } else if (etapaAtual == 'tess'){
            tessResposta.implacavel++
            enviarTess(function () {
                setTimeout(function () {
                   exibirTess(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex'
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'none';
                         joelGrafico.style.display = 'none';
                         tessGrafico.style.display = 'flex';
                         rileyGrafico.style.display = 'none';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });
        } else if (etapaAtual == 'riley'){
            rileyResposta.implacavel++
           enviarRiley(function () {
            setTimeout(function () {
               exibirRiley(function () {
                  setTimeout(function () {
                     blocoQuiz.style.display = "flex";
                     botaoGeral.style.display = 'flex'
                     conteudoDoQuiz.style.display = 'none';
                     ellieGrafico.style.display = 'none';
                     joelGrafico.style.display = 'none';
                     tessGrafico.style.display = 'none';
                     rileyGrafico.style.display = 'flex';
                     todosGrafico.style.display = 'none';
                  }, 500);
               });
            }, 500);
         });
        } else {
                atualizarOpcoes(tessResposta)
                etapaAtual = 'tess'
            }
    }),

opcaoQuiz[3].addEventListener("click", function () {
        if (etapaAtual == 'ellie') {
            ellieResposta.carinhosa++
            enviarEllie(function () {
            setTimeout(function () {
               exibirEllie(function () {
                  setTimeout(function () {
                     blocoQuiz.style.display = "flex";
                     botaoGeral.style.display = 'flex'
                     conteudoDoQuiz.style.display = 'none';
                     ellieGrafico.style.display = 'flex';
                     joelGrafico.style.display = 'none';
                     tessGrafico.style.display = 'none';
                     rileyGrafico.style.display = 'none';
                     todosGrafico.style.display = 'none';
                  }, 500);
               });
            }, 500);
         });

        } else if (etapaAtual == 'joel'){
            joelResposta.carinhosa++
            enviarJoel(function () {
                setTimeout(function () {
                   exibirJoel(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex'
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'none';
                         joelGrafico.style.display = 'flex';
                         tessGrafico.style.display = 'none';
                         rileyGrafico.style.display = 'none';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });

        } else if (etapaAtual == 'tess'){
            tessResposta.carinhosa++
            enviarTess(function () {
                setTimeout(function () {
                   exibirTess(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex';
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'none';
                         joelGrafico.style.display = 'none';
                         tessGrafico.style.display = 'flex';
                         rileyGrafico.style.display = 'none';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });
        } else if (etapaAtual == 'riley'){
            rileyResposta.carinhosa++
            enviarRiley(function () {
                setTimeout(function () {
                   exibirRiley(function () {
                      setTimeout(function () {
                         blocoQuiz.style.display = "flex";
                         botaoGeral.style.display = 'flex';
                         conteudoDoQuiz.style.display = 'none';
                         ellieGrafico.style.display = 'none';
                         joelGrafico.style.display = 'none';
                         tessGrafico.style.display = 'none';
                         rileyGrafico.style.display = 'flex';
                         todosGrafico.style.display = 'none';
                      }, 500);
                   });
                }, 500);
             });
        } else{
                atualizarOpcoes(rileyResposta)
                etapaAtual = 'riley'
            }
    });


botaoGeral.addEventListener("click", function(){
           receberTudo(function () {
              setTimeout(function () {
                 blocoQuiz.style.display = "flex";
                 botaoGeral.style.display = 'none';
                 conteudoDoQuiz.style.display = 'none';
                 ellieGrafico.style.display = 'none';
                 joelGrafico.style.display = 'none';
                 tessGrafico.style.display = 'none';
                 rileyGrafico.style.display = 'none';
                 todosGrafico.style.display = 'flex';
                 grafico_tudo1.update()
              }, 1000);
           });
})
    

// Fetch da ELLIE
function enviarEllie (callback){
    fetch("/usuarios/ellie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            opcao1Server: ellieResposta.destemida,
            opcao2Server: ellieResposta.carisma,
            opcao3Server: ellieResposta.implacavel,
            opcao4Server: ellieResposta.carinhosa,
            idServer: sessionStorage.ID_USUARIO
        })
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));


            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
}

// Fetch da ELLIE (exibir)
function exibirEllie (callback){
    fetch("/usuarios/exibirEllie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                ellieVetor[0] = json[0].Opcao1
                ellieVetor[1] = json[0].Opcao2
                ellieVetor[2] = json[0].Opcao3
                ellieVetor[3] = json[0].Opcao4
            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
}

// FETCH DO JOEL
function enviarJoel (callback){
    fetch("/usuarios/joel", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            opcao1Server: joelResposta.destemida,
            opcao2Server: joelResposta.carisma,
            opcao3Server: joelResposta.implacavel,
            opcao4Server: joelResposta.carinhosa,
            idServer: sessionStorage.ID_USUARIO
        })
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
}
// Fetch da ELLIE (exibir)
function exibirJoel (callback){
    fetch("/usuarios/exibirJoel", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                joelVetor[0] = json[0].Opcao1
                joelVetor[1] = json[0].Opcao2
                joelVetor[2] = json[0].Opcao3
                joelVetor[3] = json[0].Opcao4
            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
}

// FETCH DA TESS
function enviarTess (callback){
    fetch("/usuarios/tess", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            opcao1Server: tessResposta.destemida,
            opcao2Server: tessResposta.carisma,
            opcao3Server: tessResposta.implacavel,
            opcao4Server: tessResposta.carinhosa,
            idServer: sessionStorage.ID_USUARIO
        })
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
   
}

function exibirTess (callback){
    fetch("/usuarios/exibirTess", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                tessVetor[0] = json[0].Opcao1
                tessVetor[1] = json[0].Opcao2
                tessVetor[2] = json[0].Opcao3
                tessVetor[3] = json[0].Opcao4
            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
}

// FETCH DA RILEY
function enviarRiley (callback){
    fetch("/usuarios/riley", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            opcao1Server: rileyResposta.destemida,
            opcao2Server: rileyResposta.carisma,
            opcao3Server: rileyResposta.implacavel,
            opcao4Server: rileyResposta.carinhosa,
            idServer: sessionStorage.ID_USUARIO
        })
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
}

function exibirRiley (callback){
    fetch("/usuarios/exibirRiley", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
              rileyVetor[0] = json[0].Opcao1
              rileyVetor[1] = json[0].Opcao2
              rileyVetor[2] = json[0].Opcao3
              rileyVetor[3] = json[0].Opcao4
            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
}

// FETCH da Votação Geral
function receberTudo (callback){
    fetch("/usuarios/receberTudo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(function (resposta) {         
        console.log("ESTOU NO THEN DO Ellie()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
              todosVetor[0] = json[0].Ellie
              todosVetor[1] = json[0].Joel
              todosVetor[2] = json[0].Tess
              todosVetor[3] = json[0].Riley
            });

        } else {

            console.log("Houve um erro ao tentar enviar o grafico dados!");



            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    callback()
    return false;
}