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


const headerinfinitaFundo = document.getElementById("headerinfinitaFundo")
window.addEventListener("scroll", function () {
    var posicaoScroll = window.pageYOffset
    var resolucaoAtual = window.innerHeight

    if (resolucaoAtual < 900) {
        if (posicaoScroll < 50) {
            headerinfinitaFundo.style.display = "none"
        } else {
            headerinfinitaFundo.style.display = "flex"
        }
    }

    else {
        if (posicaoScroll < 100) {
            headerinfinitaFundo.style.display = "none"
        } else {
            headerinfinitaFundo.style.display = "flex"
        }
    }
})


const homepagetexto = document.getElementById("homepagetexto")
const noticiastexto = document.getElementById("noticiastexto")
const jogostexto = document.getElementById("jogostexto")
const serietexto = document.getElementById("serietexto")
var elemento = '';


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
