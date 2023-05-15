const headerinfinitaFundo = document.getElementById("headerinfinitaFundo")
headerinfinitaFundo.style.display = "none";
headerinfinitaFundo.style.zIndex = 2;
const irCima = document.getElementById("irCima")



// Adicione a um ID, no caso a pagina toda 'window', um evento (addEventListener), que no caso é o evento "scroll", uma função()
// Mudança de cor da Header de acordo com os Jogos
window.addEventListener("scroll", function () {
  var posicaoScroll = window.pageYOffset;
  var resolucaoAtual = window.innerHeight;
 
  if (resolucaoAtual < 900) {
    if (posicaoScroll <= 50) {
      headerinfinitaFundo.style.display = "none"
    }
    else if (posicaoScroll <= 1200) {
      headerinfinitaFundo.style.display = "flex";
      headerinfinitaFundo.style.backgroundColor = '#fc9802ee';
      if (posicaoScroll <= 800){
        irCima.style.display = "none"
      } else {
        irCima.style.display = "flex"
      }
    } else if (posicaoScroll <= 2500) {
      headerinfinitaFundo.style.display = "flex";
      headerinfinitaFundo.style.backgroundColor = '#055a18ee';
    } else if (posicaoScroll >= 2500) {
      headerinfinitaFundo.style.display = "flex";
      headerinfinitaFundo.style.backgroundColor = '#323729f8';
    }

  } else {
    // verifique se o usuário chegou à posição desejada da página
    if (posicaoScroll <= 100) {
      headerinfinitaFundo.style.display = "none"
    }
    else if (posicaoScroll <= 1800) {
      headerinfinitaFundo.style.display = "flex";
      headerinfinitaFundo.style.backgroundColor = '#fc9802ee';

      if (posicaoScroll <= 800){
        irCima.style.display = "none"
      } else {
        irCima.style.display = "flex"
      }
    } else if (posicaoScroll <= 3400) {
      headerinfinitaFundo.style.display = "flex";
      headerinfinitaFundo.style.backgroundColor = '#055a18ee';
    } else if (posicaoScroll >= 3400) {
      headerinfinitaFundo.style.display = "flex";
      headerinfinitaFundo.style.backgroundColor = '#323729f8';
    }
  }

});

/* Botão Ir para cima */
irCima.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

/* Animação navbar HOVER*/
const noticiastexto = document.getElementById('noticiastexto');
const noticiastextoInfinito = document.getElementById('noticiastextoInfinito');
const jogostexto = document.getElementById('jogostexto');
const jogostextoInfinito = document.getElementById('jogostextoInfinito');
const serietexto = document.getElementById('serietexto');
const serietextoInfinito = document.getElementById('serietextoInfinito');

noticiastextoInfinito.addEventListener("click", function(){
  window.location = "../Noticias/noticia.html"
})

noticiastexto.style.color = '#ffffff;';
// Adicione um evento a um ID do HTML, no caso noticiastexto, a função mouseover que é equivalente ao :hover do CSS, execute a função function() 
noticiastexto.addEventListener('mouseenter', function () {
  noticiastexto.style.color = '#ffe70c';
}),
  noticiastexto.addEventListener("click", function () {
    window.location = "../Noticias/noticia.html"
  }),
  noticiastexto.addEventListener('mouseout', function () {
    noticiastexto.style.color = '#ffffff';
  }),
  serietexto.addEventListener("mouseover", function () {
    serietexto.style.color = '#ffe70c';
  }),
  serietexto.addEventListener('mouseout', function () {
    serietexto.style.color = '#ffffff';
  });

/* Home Infinito */
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


/* Animação dos blocos Onde + Links*/

const ondeAnimationSteam = document.getElementById('ondeAnimationSteam')
const ondeAnimationEpic = document.getElementById('ondeAnimationEpic')
const ondeAnimationPSN = document.getElementById('ondeAnimationPSN')
const ondeAnimationPSNTLOU2 = document.getElementById('ondeAnimationPSNTLOU2')
const ondeSteam = document.getElementById('ondeSteam')
const ondeEpic = document.getElementById('ondeEpic')
const ondePSN = document.getElementById('ondePSN')
const ondePSNTLOU2 = document.getElementById('ondePSNTLOU2')
const ondeTLOUHBO = document.getElementById('ondeTLOUHBO')
const ondeAnimationHBO = document.getElementById('ondeAnimationHBO')

ondeSteam.addEventListener("mouseover", function () {
  ondeAnimationSteam.style.animationName = "ondeA"
}),
  ondeSteam.addEventListener("mouseout", function () {
    ondeAnimationSteam.style.animationName = "ondeAReverse"
  }),
  ondeEpic.addEventListener("mouseover", function () {
    ondeAnimationEpic.style.animationName = "ondeA"
  }),
  ondeEpic.addEventListener("mouseout", function () {
    ondeAnimationEpic.style.animationName = "ondeAReverse"
  }),

  ondePSN.addEventListener("mouseover", function () {
    ondeAnimationPSN.style.animationName = "ondeA"
  }),
  ondePSN.addEventListener("mouseout", function () {
    ondeAnimationPSN.style.animationName = "ondeAReverse"
  }),
  ondePSNTLOU2.addEventListener("mouseover", function () {
    ondeAnimationPSNTLOU2.style.animationName = "ondeA"
  }),
  ondePSNTLOU2.addEventListener("mouseout", function () {
    ondeAnimationPSNTLOU2.style.animationName = "ondeAReverse"
  });
ondeTLOUHBO.addEventListener("mouseover", function () {
  ondeAnimationHBO.style.animationName = "ondeA"
}),
  ondeTLOUHBO.addEventListener("mouseout", function () {
    ondeAnimationHBO.style.animationName = "ondeAReverse"
  }),

  ondeSteam.addEventListener("click", function () {
    window.location.href = 'https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/'
  }),
  ondeEpic.addEventListener("click", function () {
    window.location.href = 'https://store.epicgames.com/pt-BR/p/the-last-of-us-part-1'
  }),
  ondePSN.addEventListener("click", function () {
    window.location.href = 'https://store.playstation.com/pt-br/concept/10002694'
  }),
  ondePSNTLOU2.addEventListener("click", function () {
    window.location.href = 'https://store.playstation.com/pt-br/product/UP9000-CUSA07820_00-THELASTOFUSPART2'
  }),
  ondeTLOUHBO.addEventListener("click", function () {
    window.location.href = 'https://play.hbomax.com/page/urn:hbo:page:GYyofRQHeuJ6fiQEAAAEy:type:series?source=googleHBOMAX&action=play'
  });


/* LINKS nos blocos TLOU1 */

const HistoriaClick = document.getElementById("HistoriaClick")
const PersonagemClick = document.getElementById("PersonagemClick")

HistoriaClick.addEventListener("click", function () {
  window.location.href = ('../PaginaTLOU1/tlou1.html')
});

PersonagemClick.addEventListener("click", function(){
  window.location.href = "../PaginaTLOU1/tlou1.html#personagensCarrosel"
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

/* TRAILER TLOU 1 */
const trailer = document.getElementById("trailer")
const trailer2 = document.getElementById("trailer2")
const trailer3 = document.getElementById("trailer3")
const playIcon = document.getElementById("playIcon")
const playIcon2 = document.getElementById("playIcon2")
const playIcon3 = document.getElementById("playIcon3")

trailer.addEventListener("mouseover", function(){
  playIcon.style.color = "#ffe70c"
})
trailer.addEventListener("mouseout", function(){
  playIcon.style.color = "#ffffff"
})
trailer.addEventListener("click", function(){
  window.location.href = "https://www.youtube.com/watch?v=NRZ9kL3F2Po"
})

trailer2.addEventListener("mouseover", function(){
  playIcon2.style.color = "#297F00"
})
trailer2.addEventListener("mouseout", function(){
  playIcon2.style.color = "#ffffff"
})
trailer2.addEventListener("click", function(){
  window.location.href = "https://www.youtube.com/watch?v=W2Wnvvj33Wo"
})

trailer3.addEventListener("mouseover", function(){
  playIcon3.style.color = "#608103"
})
trailer3.addEventListener("mouseout", function(){
  playIcon3.style.color = "#ffffff"
})
trailer3.addEventListener("click", function(){
  window.location.href = "https://www.youtube.com/watch?v=IpjRuuFEPMk"
})


/* MENU FLUTUANTE JOGOS */
const menuflutuanteJogos = document.getElementById("menuflutuanteJogos")
// var resolucaoAtual = window.innerHeight;

jogostexto.addEventListener("mouseover", function () {
  jogostexto.style.color = '#ffe70c';
  menuflutuanteJogos.style.display = "flex"
})

jogostexto.addEventListener('mouseout', function () {
  jogostexto.style.color = '#ffffff';
  menuflutuanteJogos.style.display = "none"
})