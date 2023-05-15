var carroselItems = document.querySelectorAll(".slide")
var carroselIndex = 0;

function slideAtual(n) {
    carroselItems[carroselIndex].classList.remove("ativa");
    carroselIndex = (carroselIndex + n) % carroselItems.length
    carroselItems[carroselIndex].classList.add("ativa")
}

const personagemProximo = document.getElementById("personagemProximo")
const personagemAnterior = document.getElementById("personagemAnterior")
personagemProximo.addEventListener("click", function () {
    slideAtual(1);
})
personagemAnterior.addEventListener("click", function () {
    slideAtual(-1)
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
        } else {
            headerinfinitaFundo.style.display = "flex"
        }

        if (posicaoScroll <= 400) {
            irCima.style.display = "none"
        } else {
            irCima.style.display = "flex"
        }

    } else {
        if (posicaoScroll <= 100) {
            headerinfinitaFundo.style.display = "none"
        } else {
            headerinfinitaFundo.style.display = "flex"
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
const noticiastexto = document.getElementById("noticiastexto")
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

noticiastexto.addEventListener("click", function () {
    window.location = "../Noticias/noticia.html"
})
noticiastextoInfinito.addEventListener("click", function () {
    window.location = "../Noticias/noticia.html"
})


homepagetexto.addEventListener("mouseover", function () {
    homepagetexto.style.color = "#ffe70c"
}),

    homepagetexto.addEventListener("mouseout", function () {
        homepagetexto.style.color = "#ffffff"
    }),

    noticiastexto.addEventListener('mouseenter', function () {
        noticiastexto.style.color = '#ffe70c';
    }),
    noticiastexto.addEventListener('mouseout', function () {
        noticiastexto.style.color = '#ffffff';
    }),
    jogostexto.addEventListener("mouseover", function () {
        jogostexto.style.color = '#ffe70c';
    }),
    jogostexto.addEventListener('mouseout', function () {
        jogostexto.style.color = '#ffffff';
    }),
    serietexto.addEventListener("mouseover", function () {
        serietexto.style.color = '#ffe70c';
    }),
    serietexto.addEventListener('mouseout', function () {
        serietexto.style.color = '#ffffff';
    });



/* Home Infinito */
homepagetextoInfinito.addEventListener("mouseover", function () {
    homepagetextoInfinito.style.color = "#ffe70c"
}),

    homepagetextoInfinito.addEventListener("mouseout", function () {
        homepagetextoInfinito.style.color = "#ffffff"
    }),

    noticiastextoInfinito.addEventListener('mouseover', function () {
        noticiastextoInfinito.style.color = '#ffe70c';
    }),
    noticiastextoInfinito.addEventListener('mouseout', function () {
        noticiastextoInfinito.style.color = '#ffffff';
    }),
    jogostextoInfinito.addEventListener("mouseover", function () {
        jogostextoInfinito.style.color = '#ffe70c';
    }),
    jogostextoInfinito.addEventListener('mouseout', function () {
        jogostextoInfinito.style.color = '#ffffff';
    }),
    serietextoInfinito.addEventListener("mouseover", function () {
        serietextoInfinito.style.color = '#ffe70c';
    }),
    serietextoInfinito.addEventListener('mouseout', function () {
        serietextoInfinito.style.color = '#ffffff';
    });


/* MENU FLUTUANTE JOGOS */
const menuflutuanteJogos = document.getElementById("menuflutuanteJogos")
// var resolucaoAtual = window.innerHeight;
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