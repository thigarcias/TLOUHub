
ellie = {
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
joel = {
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

tess = {
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

riley = {
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
let personagemFavorito = 0

function atualizarOpcoes(opcao) {
    quiz[0].querySelector('#perguntaQuiz').innerHTML = `${opcao.pergunta}`
    opcaoTexto[0].innerHTML = `${opcao.opcao1}`
    opcaoTexto[1].innerHTML = `${opcao.opcao2}`
    opcaoTexto[2].innerHTML = `${opcao.opcao3}`
    opcaoTexto[3].innerHTML = `${opcao.opcao4}`
}

opcaoQuiz[0].addEventListener("click", function () {
    if (personagemFavorito == 'ellie') {
        ellie.destemida++
        enviarDados(function () {
            setTimeout(function () {
                exibirDados(function () {
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
    } else if (personagemFavorito == 'joel') {
        joel.destemida++
        enviarDados(function () {
            setTimeout(function () {
                exibirDados(function () {
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

    } else if (personagemFavorito == 'tess') {
        tess.destemida++
        enviarDados(function () {
            setTimeout(function () {
                exibirDados(function () {
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
    } else if (personagemFavorito == 'riley') {
        riley.destemida++
        enviarDados(function () {
            setTimeout(function () {
                exibirDados(function () {
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
        atualizarOpcoes(ellie)
        etapaAtual = ellie
        personagemFavorito = 'ellie'
    }
}),

    opcaoQuiz[1].addEventListener("click", function () {
        if (personagemFavorito == 'ellie') {
            ellie.carisma++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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


        } else if (personagemFavorito == 'joel') {
            joel.carisma++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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

        } else if (personagemFavorito == 'tess') {
            tess.carisma++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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
        } else if (personagemFavorito == 'riley') {
            riley.carisma++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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
            atualizarOpcoes(joel)
            etapaAtual = joel
            personagemFavorito = 'joel'
        }
    }),

    opcaoQuiz[2].addEventListener("click", function () {
        if (personagemFavorito == 'ellie') {
            ellie.implacavel++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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

        } else if (personagemFavorito == 'joel') {
            joel.implacavel++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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

        } else if (personagemFavorito == 'tess') {
            tess.implacavel++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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
        } else if (personagemFavorito == 'riley') {
            riley.implacavel++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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
            atualizarOpcoes(tess)
            etapaAtual = tess
            personagemFavorito = 'tess'
        }
    }),

    opcaoQuiz[3].addEventListener("click", function () {
        if (personagemFavorito == 'ellie') {
            ellie.carinhosa++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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

        } else if (personagemFavorito == 'joel') {
            joel.carinhosa++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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

        } else if (personagemFavorito == 'tess') {
            tess.carinhosa++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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
        } else if (personagemFavorito == 'riley') {
            riley.carinhosa++
            enviarDados(function () {
                setTimeout(function () {
                    exibirDados(function () {
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
        } else {
            atualizarOpcoes(riley)
            etapaAtual = riley
            personagemFavorito = 'riley'
        }
    });


botaoGeral.addEventListener("click", function () {
    receberTudo()
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
})


// Fetch para Enviar Dados
function enviarDados(callback) {
    fetch("/usuarios/enviarDados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            opcao1Server: etapaAtual["destemida"],
            opcao2Server: etapaAtual["carisma"],
            opcao3Server: etapaAtual["implacavel"],
            opcao4Server: etapaAtual["carinhosa"],
            idServer: sessionStorage.ID_USUARIO,
            personagemFavoritoServer: personagemFavorito
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

// Fetch para Exibir Dados
function exibirDados(callback) {
    fetch("/usuarios/exibirDados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            personagemFavoritoServer: personagemFavorito
        })
    })

        .then(function (resposta) {
            console.log("ESTOU NO THEN DO Ellie()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    if (personagemFavorito == "ellie") {
                        ellieVetor[0] = json[0].Opcao1
                        ellieVetor[1] = json[0].Opcao2
                        ellieVetor[2] = json[0].Opcao3
                        ellieVetor[3] = json[0].Opcao4
                    } else if (personagemFavorito == "joel") {
                        joelVetor[0] = json[0].Opcao1
                        joelVetor[1] = json[0].Opcao2
                        joelVetor[2] = json[0].Opcao3
                        joelVetor[3] = json[0].Opcao4
                    } else if (personagemFavorito == "tess") {
                        tessVetor[0] = json[0].Opcao1
                        tessVetor[1] = json[0].Opcao2
                        tessVetor[2] = json[0].Opcao3
                        tessVetor[3] = json[0].Opcao4
                    } else if (personagemFavorito == "riley") {
                        rileyVetor[0] = json[0].Opcao1
                        rileyVetor[1] = json[0].Opcao2
                        rileyVetor[2] = json[0].Opcao3
                        rileyVetor[3] = json[0].Opcao4
                    }
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
function receberTudo() {
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
                    grafico_tudo1.update()
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
    return false;
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
        resposta.json().then(json => {

            
            if(json[0].personagemFavorito == 'ellie'){
            personagemFavorito = json[0].personagemFavorito
            blocoQuiz.style.display = "flex";
            botaoGeral.style.display = 'flex';
            conteudoDoQuiz.style.display = 'none';
            ellieGrafico.style.display = 'flex';
            joelGrafico.style.display = 'none';
            tessGrafico.style.display = 'none';
            rileyGrafico.style.display = 'none';
            todosGrafico.style.display = 'none';
            exibirDados()
            grafico_ellie1.update()
            } else if (json[0].personagemFavorito == 'joel'){
                personagemFavorito = json[0].personagemFavorito
                blocoQuiz.style.display = "flex";
                botaoGeral.style.display = 'flex';
                conteudoDoQuiz.style.display = 'none';
                ellieGrafico.style.display = 'none';
                joelGrafico.style.display = 'flex';
                tessGrafico.style.display = 'none';
                rileyGrafico.style.display = 'none';
                todosGrafico.style.display = 'none';
                exibirDados()
                grafico_joel1.update()
            } else if (json[0].personagemFavorito == 'tess'){
                personagemFavorito = json[0].personagemFavorito
                blocoQuiz.style.display = "flex";
                botaoGeral.style.display = 'flex';
                conteudoDoQuiz.style.display = 'none';
                ellieGrafico.style.display = 'none';
                joelGrafico.style.display = 'none';
                tessGrafico.style.display = 'flex';
                rileyGrafico.style.display = 'none';
                todosGrafico.style.display = 'none';
                exibirDados()
                grafico_tess1.update()
            } else {
                personagemFavorito = json[0].personagemFavorito
                blocoQuiz.style.display = "flex";
                botaoGeral.style.display = 'flex';
                conteudoDoQuiz.style.display = 'none';
                ellieGrafico.style.display = 'none';
                joelGrafico.style.display = 'none';
                tessGrafico.style.display = 'none';
                rileyGrafico.style.display = 'flex';
                todosGrafico.style.display = 'none';
                exibirDados()
                grafico_riley1.update()
            }
        });
    })
}
