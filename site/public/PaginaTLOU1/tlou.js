// CONTAINER
var resolucaoAtual = window.innerHeight
const container = document.querySelectorAll(".container")
<<<<<<< HEAD
container[2].style.height = "50vh"
container[1].style.marginTop = "5%"
=======

if (resolucaoAtual < 900){
    container[1].style.height = "105vh"
    container[1].style.marginTop = "5%"
    container[2].style.height = "75vh"
} else {
    container[2].style.height = "50vh"
}
>>>>>>> 4487a7cdcbdeb0f673aee263647e0ac32107e789

// CARROSSEL
var personagens = [
    ellie = {
        nome: `ELLIE WILLIAMS`,
        url: `url('./assets/ellieinvertido.png')`,
        gradiente: `linear-gradient(89.96deg, rgba(6, 31, 253, 0.1675) 18.83%, rgba(6, 208, 253, 0) 84.16%)`,
        corTexto: `#4883E3`,
        conteudo: `Ellie Williams é uma das personagens principais da franquia de jogos
        eletrônicos "The Last of Us", desenvolvida pela Naughty Dog. Ela é introduzida no primeiro
        jogo como uma adolescente de 14 anos que vive em um mundo pós-apocalíptico onde a maioria da
        população foi transformada em zumbis canibais conhecidos como infectados.
         Ellie é uma personagem complexa e interessante, com uma história de vida
        difícil. Ela é inteligente, corajosa e astuta, e se mostra capaz de sobreviver em um mundo
        extremamente perigoso. Durante o jogo, ela e Joel, o outro personagem principal, desenvolvem
        um forte vínculo emocional, enfrentando juntos diversos desafios e perigos.`,
    },
    joel = {
        nome: `JOEL MILLER`,
        url: `url('./assets/joelinvertido.png')`,
        gradiente: `linear-gradient(89.96deg, rgba(210, 189, 75, 0.25) 18.83%, rgba(253, 199, 6, 0) 84.16%)`,
        corTexto: `#E3B848`,
        conteudo: `Joel é um homem de meia-idade que já passou por muitas dificuldades e perdas na vida, o que o tornou desconfiado e cínico em relação aos outros. Ele é contratado para levar Ellie, uma adolescente que pode ser a chave para a cura da pandemia, para um grupo de resistência conhecido como os Vagalumes.
        Ao longo do jogo, Joel e Ellie criam um forte vínculo emocional, apesar das diferenças de idade e personalidade. Eles enfrentam juntos diversos desafios, incluindo confrontos com humanos hostis e infectados perigosos. Durante sua jornada, Joel revela seu passado sombrio e os eventos traumáticos que o levaram a ser quem é.`,
    }
]
const carrossel = document.querySelectorAll(".carrossel")
const carrosselPersonagem = carrossel[0].querySelectorAll(".carrosselPersonagem")
const episodioVoltar = document.getElementById("episodioVoltar")
const episodioProceder = document.getElementById("episodioProceder")
const personagemDescricao = document.querySelectorAll(".personagemDescricao")


for (var i = 1; i < carrosselPersonagem.length; i++) {
    const personagemTexto = carrosselPersonagem[i].querySelector("#personagemTexto")
    const personagemTipo = carrosselPersonagem[i].querySelector(".personagemTipo")
    const personagemTitulo = carrosselPersonagem[i].querySelector("#personagemTitulo")
    const personagemConteudo = personagemDescricao[i].querySelector("#personagemConteudo")

    carrosselPersonagem[i].style.backgroundImage = personagens[i].url
    personagemTexto.innerHTML = personagens[i].nome
    personagemTipo.style.background = personagens[i].gradiente
    personagemTitulo.style.color = personagens[i].corTexto
    personagemConteudo.innerHTML = personagens[i].conteudo
}

episodioProceder.addEventListener("click", function () {
    carrossel[0].scrollLeft += 2500
})

episodioVoltar.addEventListener("click", function () {
    carrossel[0].scrollLeft -= 2500
})


/* HEADER FIXA E IR CIMA */
const irCima = document.getElementById("irCima")
const headerinfinitaFundo = document.getElementById("headerinfinitaFundo")
window.addEventListener("scroll", function () {
    var posicaoScroll = window.pageYOffset
    var resolucaoAtual = window.innerHeight

    if (resolucaoAtual < 900) {
        if (posicaoScroll <= 100) {
            headerinfinitaFundo.style.display = "none"
            menuflutuanteJogos.style.top = "6.5%"
            menuflutuanteJogos.style.zIndex = ""
        } else {
            headerinfinitaFundo.style.display = "flex"
            menuflutuanteJogos.style.top = "5%"
            menuflutuanteJogos.style.zIndex = "2"
        }

        if (posicaoScroll <= 400) {
            irCima.style.display = "none"
        } else {
            irCima.style.display = "flex"
        }

    } else {
        if (posicaoScroll <= 100) {
            headerinfinitaFundo.style.display = "none"
            menuflutuanteJogos.style.top = "6.5%"
            menuflutuanteJogos.style.zIndex = ""
        } else {
            headerinfinitaFundo.style.display = "flex"
            menuflutuanteJogos.style.top = "5%"
            menuflutuanteJogos.style.zIndex = "2"
        }

        if (posicaoScroll <= 400) {
            irCima.style.display = "none"
        } else {
            irCima.style.display = "flex"
        }
    }
})

/* Botão Ir para cima */
irCima.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


const homepagetexto = document.getElementById("homepagetexto")
// const noticiastexto = document.getElementById("noticiastexto")
const jogostexto = document.getElementById("jogostexto")
const serietexto = document.getElementById("serietexto")
const homepagetextoInfinito = document.getElementById("homepagetextoInfinito")
const noticiastextoInfinito = document.getElementById("noticiastextoInfinito")

homepagetexto.addEventListener("click", function () {
    window.location.href = "../PaginaInicial/home.html"
}),

    homepagetextoInfinito.addEventListener("click", function () {
        window.location = "../PaginaInicial/home.html"
    })

// noticiastexto.addEventListener("click", function () {
//     window.location = "../Noticias/noticia.html"
// })
// noticiastextoInfinito.addEventListener("click", function () {
//     window.location = "../Noticias/noticia.html"
// })


homepagetexto.addEventListener("mouseover", function () {
    homepagetexto.style.color = "#ffe70c"
}),

    homepagetexto.addEventListener("mouseout", function () {
        homepagetexto.style.color = "#ffffff"
    }),

    // noticiastexto.addEventListener('mouseenter', function () {
    //     noticiastexto.style.color = '#ffe70c';
    // }),
    // noticiastexto.addEventListener('mouseout', function () {
    //     noticiastexto.style.color = '#ffffff';
    // }),
    serietexto.addEventListener("mouseover", function () {
        serietexto.style.color = '#ffe70c';
    }),
    serietexto.addEventListener('mouseout', function () {
        serietexto.style.color = '#ffffff';
    });

serietexto.addEventListener("click", function () {
    window.location = "../PaginaTLOUHBO/hbo.html"
})



/* Home Infinito */
homepagetextoInfinito.addEventListener("mouseover", function () {
    homepagetextoInfinito.style.color = "#ffe70c"
}),

    homepagetextoInfinito.addEventListener("mouseout", function () {
        homepagetextoInfinito.style.color = "#ffffff"
    }),

    // noticiastextoInfinito.addEventListener('mouseover', function () {
    //     noticiastextoInfinito.style.color = '#ffe70c';
    // }),
    // noticiastextoInfinito.addEventListener('mouseout', function () {
    //     noticiastextoInfinito.style.color = '#ffffff';
    // }),
    serietextoInfinito.addEventListener("mouseover", function () {
        serietextoInfinito.style.color = '#ffe70c';
    }),
    serietextoInfinito.addEventListener('mouseout', function () {
        serietextoInfinito.style.color = '#ffffff';
    });


/* MENU FLUTUANTE JOGOS */
const menuflutuanteJogos = document.getElementById("menuflutuanteJogos")
var jogos = document.querySelectorAll(".jogos")
for (let elementos = 0; elementos < 2; elementos++) {
    jogos[elementos].addEventListener("mouseenter", function () {
        jogos[elementos].querySelector("#jogostexto").style.color = "#ffe70c"
        menuflutuanteJogos.style.display = "flex"
    })

    jogos[elementos].addEventListener('mouseleave', function () {
        jogos[elementos].querySelector("#jogostexto").style.color = "#ffffff"
        menuflutuanteJogos.style.display = "none"
    })
}


const menuTLOU1 = document.querySelectorAll(".menuTLOU1")
menuTLOU1[0].addEventListener("click", function () {
    window.location = "../PaginaTLOU1/tlou1.html"
})

const menuTLOULB = document.querySelectorAll(".menuTLOULB")
menuTLOULB[0].addEventListener("click", function () {
    window.location = "../PaginaTLOULB/left.html"
})

// Botão entre do BLUR 
const blurBotao = document.getElementById("blurBotao")
blurBotao.addEventListener("click", function () {
    window.location = "../Login/login.html"
})

/* LINK Botão Login/Cadastro*/

const cadastrartexto = document.getElementById("cadastrartexto")
cadastrartexto.addEventListener("click", function () {
    window.location.href = "../Cadastro/cadastro.html"
})

const logintexto = document.getElementById("logintexto")
logintexto.addEventListener("click", function () {
    window.location.href = "../Login/login.html"
})



/* BOTAO PARA DESLOGAR */
const conta_botao = document.getElementById("conta_botao")
conta_botao.addEventListener("click", function () {
    limparSessao()
})
