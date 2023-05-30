

window.onload = verificarCurtida()
window.onload = validarSessao()
// NAVBAR links

const homepagetexto = document.getElementById('homepagetexto');
const jogostexto = document.getElementById('jogostexto');
const serietexto = document.getElementById('serietexto');

homepagetexto.addEventListener("click", function () {
  window.location = "../PaginaInicial/home.html"
})

serietexto.addEventListener("click", function () {
  window.location = "../PaginaTLOUHBO/hbo.html"
})


// Ir para Cima botão 
const irCima = document.getElementById("irCima")

window.addEventListener("scroll", function () {
  var posicaoScroll = window.pageYOffset;

  if (posicaoScroll <= 500) {
    irCima.style.display = "none"
  } else {
    irCima.style.display = "flex"
  }
})

irCima.addEventListener("click", function () {
  window.scrollTo({
    top: '0%',
    behavior: 'smooth'
  });
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


// USUARIO
const idUsuario = document.querySelectorAll(".idUsuario")
const idUsuarioTexto = document.getElementById("idUsuarioTexto")
const iconUsuario = document.getElementById("iconUsuario")
const menuflutuante = document.querySelectorAll(".menuflutuante")
idUsuarioTexto.addEventListener("mouseenter", function () {
  idUsuarioTexto.style.color = '#FDC706'
  iconUsuario.style.color = '#FDC706'
})

idUsuarioTexto.addEventListener("mouseleave", function () {
  idUsuarioTexto.style.color = 'white'
  iconUsuario.style.color = 'white'
})

idUsuario[0].addEventListener("click", function () {
  if (menuflutuante[0].style.display == "" || menuflutuante[0].style.display == "none") {
    menuflutuante[0].style.display = 'flex'
  } else {
    menuflutuante[0].style.display = 'none'
  }
})


/* BOTAO PARA DESLOGAR */
const deslogar = document.getElementById("deslogar")
deslogar.addEventListener("click", function () {
  limparSessao()
})


/* MENU FLUTUANTE JOGOS */
const menuflutuanteJogos = document.getElementById("menuflutuanteJogos")
var jogos = document.querySelectorAll(".jogos")
jogos[0].addEventListener("mouseenter", function () {
  jogos[0].querySelector("#jogostexto").style.color = "#ffe70c"
  menuflutuanteJogos.style.display = "flex"
})

jogos[0].addEventListener('mouseleave', function () {
  jogos[0].querySelector("#jogostexto").style.color = "#ffffff"
  menuflutuanteJogos.style.display = "none"
})


const menuTLOU1 = document.querySelectorAll(".menuTLOU1")
menuTLOU1[0].addEventListener("click", function () {
  window.location = "../PaginaTLOU1/tlou1.html"
})

const menuTLOULB = document.querySelectorAll(".menuTLOULB")
menuTLOULB[0].addEventListener("click", function () {
  window.location = "../PaginaTLOULB/left.html"
})





/* ELENCO */
const elenco = document.querySelectorAll('.integranteElenco')
// Bella Ramsey
const elencoImagem = elenco[1].querySelector('#elencoImagem')
const elencoAtor = elenco[1].querySelector('#elencoAtor')
const elencoNome = elenco[1].querySelector('#elencoNome')
elenco[1].style.marginLeft = '3%'
elencoImagem.style.backgroundImage = 'url(./assets/bella.jpg)';
elencoImagem.style.backgroundPositionX = '30%'
elencoAtor.innerHTML = 'BELLA RAMSEY'
elencoNome.innerHTML = 'Ellie Williams'

// Anna Torv
elenco[2].style.marginLeft = '3%'
const elencoImagem2 = elenco[2].querySelector('#elencoImagem')
const elencoAtor2 = elenco[2].querySelector('#elencoAtor')
const elencoNome2 = elenco[2].querySelector('#elencoNome')
elencoImagem2.style.backgroundImage = 'url(./assets/anatirv.png)';
elencoImagem2.style.backgroundPositionX = '3%'
elencoAtor2.innerHTML = 'ANNA TORV'
elencoNome2.innerHTML = 'Tess Servopoulos'

// Tommy Miller
elenco[3].style.marginLeft = '3%'
const elencoImagem3 = elenco[3].querySelector('#elencoImagem')
const elencoAtor3 = elenco[3].querySelector('#elencoAtor')
const elencoNome3 = elenco[3].querySelector('#elencoNome')
elencoImagem3.style.backgroundImage = 'url(./assets/800px-Gabriel_Luna_by_Gage_Skidmore_2.jpg)';
elencoImagem3.style.backgroundPositionX = '3%'
elencoAtor3.innerHTML = 'GABRIEL LUNA'
elencoNome3.innerHTML = 'Tommy Miller'

// Bill
const elencoImagem4 = elenco[4].querySelector('#elencoImagem')
const elencoAtor4 = elenco[4].querySelector('#elencoAtor')
const elencoNome4 = elenco[4].querySelector('#elencoNome')
elencoImagem4.style.backgroundImage = 'url(./assets/image-w856.webp)';
elencoImagem4.style.backgroundPositionX = '3%'
elencoAtor4.innerHTML = 'NICK OFFERMAN'
elencoNome4.innerHTML = 'Bill'

// Frank
elenco[5].style.marginLeft = '3%'
const elencoImagem5 = elenco[5].querySelector('#elencoImagem')
const elencoAtor5 = elenco[5].querySelector('#elencoAtor')
const elencoNome5 = elenco[5].querySelector('#elencoNome')
elencoImagem5.style.backgroundImage = 'url(./assets/3430.jpg)';
elencoImagem5.style.backgroundPositionX = '3%'
elencoAtor5.innerHTML = 'MURRAY BARTLETT'
elencoNome5.innerHTML = 'Frank'

// Sarah
elenco[6].style.marginLeft = '3%'
const elencoImagem6 = elenco[6].querySelector('#elencoImagem')
const elencoAtor6 = elenco[6].querySelector('#elencoAtor')
const elencoNome6 = elenco[6].querySelector('#elencoNome')
elencoImagem6.style.backgroundImage = 'url(./assets/captura-de-tela-2023-01-10-as-06.55.56.webp)';
elencoImagem6.style.backgroundPositionX = '60%'
elencoAtor6.innerHTML = 'NICO PARKER'
elencoNome6.innerHTML = 'Sarah Miller'

// Riley
elenco[7].style.marginLeft = '3%'
const elencoImagem7 = elenco[7].querySelector('#elencoImagem')
const elencoAtor7 = elenco[7].querySelector('#elencoAtor')
const elencoNome7 = elenco[7].querySelector('#elencoNome')
elencoImagem7.style.backgroundImage = 'url(./assets/Storm-Reid.webp)';
elencoImagem7.style.backgroundPositionX = '60%'
elencoAtor7.innerHTML = 'STORM REID'
elencoNome7.innerHTML = 'Riley Abel'



// Carrossel
const episodioVoltar = document.getElementById("episodioVoltar")
const episodioProceder = document.getElementById("episodioProceder")
const episodioContainer = document.querySelectorAll(".episodioContainer")


episodioProceder.addEventListener("click", function () {
  if (episodioContainer[0].scrollLeft >= 0) {
    episodioContainer[0].scrollLeft += 300
  }
})

episodioVoltar.addEventListener("click", function () {
  if (episodioContainer[0].scrollLeft >= 0) {
    episodioContainer[0].scrollLeft -= 300
  }
})

// Imagens do Carrossel
const episodioConteudo = document.querySelectorAll(".episodioConteudo")
var urls = [
  `url(./assets/last-of-us-review-episode-1-1920x1024.jpg)`,
  `url(./assets/6000.webp)`,
  `url(./assets/murray-bartlett-nick-offerman_1.webp)`,
  `url(./assets/05lastofus-recap-articleLarge.webp)`,
  `url(./assets/f64a0e9eb1e2337d512276171a8261bd6f-the-last-of-us-episode-5-1920x1024.jpg)`,
  `url(./assets/gabriel-luna-pedro-pascal_0_.webp)`,
  `url(./assets/200.webp)`,
  `url(./assets/pedro-pascal-bella-ramsey_1-H-2023.webp)`,
  `url(./assets/the-last-of-us-episode-9-tv-show-vs-game-comparison_amk6.jpg)`
]


var urlEp2 = `url(./assets/6000.webp)`
var urlEp3 = `url(./assets/murray-bartlett-nick-offerman_1.webp)`
var urlEp4 = `url(./assets/05lastofus-recap-articleLarge.webp)`
var urlEp5 = `url(./assets/f64a0e9eb1e2337d512276171a8261bd6f-the-last-of-us-episode-5-1920x1024.jpg)`
var urlEp6 = `url(./assets/gabriel-luna-pedro-pascal_0_.webp)`

for (var i = 0; i < episodioConteudo.length; i++) {
  const episodioImagem = episodioConteudo[i].querySelector("#episodioImagem")
  const episodioQual = episodioConteudo[i].querySelector("#episodioQual")
  episodioImagem.style.backgroundImage = urls[i];
  episodioQual.innerHTML = `Episódio ${i + 1}`
}

// JSON do resumo dos EPS
var jsonEPS = [

  jsonEp1 = {
    titulo: 'THE LAST OF US: EPISÓDIO 1',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  },

  jsonEp2 = {
    titulo: 'THE LAST OF US: EPISÓDIO 2',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  },

  jsonEp3 = {
    titulo: 'THE LAST OF US: EPISÓDIO 3',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  },

  jsonEp4 = {
    titulo: 'THE LAST OF US: EPISÓDIO 4',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  },

  jsonEp5 = {
    titulo: 'THE LAST OF US: EPISÓDIO 5',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  },

  jsonEp6 = {
    titulo: 'THE LAST OF US: EPISÓDIO 6',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  },

  jsonEp7 = {
    titulo: 'THE LAST OF US: EPISÓDIO 7',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  },

  jsonEp8 = {
    titulo: 'THE LAST OF US: EPISÓDIO 8',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  },
  jsonEp9 = {
    titulo: 'THE LAST OF US: EPISÓDIO 9',
    resumo: 'O fungo Cordyceps é um gênero de fungos que infecta insetos e outros artrópodes. O fungo infecta seu hospedeiro através de esporos que entram no corpo do inseto e começam a crescer e se espalhar, eventualmente matando-o. O Cordyceps inspirou a criação do universo de The Last of Us, no qual uma mutação do fungo infecta humanos e transforma-os em criaturas violentas e perigosas. No jogo, o fungo é altamente contagioso e pode ser transmitido através de esporos que se espalham pelo ar, tornando-o extremamente perigoso para a população humana. Ele é fascinante por sua capacidade de infectar e controlar a mente de seu hospedeiro, alterando seu comportamento para atender aos interesses do fungo. Embora a versão fictícia do fungo em The Last of Us seja altamente exagerada e perigosa, a inspiração biológica por trás do fungo é um exemplo interessante de como a natureza pode inspirar a ficção científica.'
  }
]

const jsonEpisodios = document.querySelectorAll(".jsonEpisodios")
const jsonEpisodiosImagem = jsonEpisodios[0].querySelector("#jsonEpisodiosImagem")
const jsonEpisodioTitulo = jsonEpisodios[0].querySelector("#jsonEpisodioTitulo")
const jsonEpisodioResumo = jsonEpisodios[0].querySelector("#jsonEpisodioResumo")
const curtidaIcon = document.getElementById("curtidaIcon")

for (let x = 0; x < episodioConteudo.length; x++) {
  episodioConteudo[x].addEventListener('click', function () {
    jsonEpisodiosImagem.style.backgroundImage = urls[x]
    jsonEpisodioTitulo.innerHTML = jsonEPS[x].titulo
    jsonEpisodioResumo.innerHTML = jsonEPS[x].resumo

    if (listaCurtidas[0].ep1 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 1') {
      curtidaIcon.style.color = 'red'
    } else if (listaCurtidas[0].ep2 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 2') {
      curtidaIcon.style.color = 'red'
    } else if (listaCurtidas[0].ep3 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 3') {
      curtidaIcon.style.color = 'red'
    } else if (listaCurtidas[0].ep4 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 4') {
      curtidaIcon.style.color = 'red'
    } else if (listaCurtidas[0].ep5 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 5') {
      curtidaIcon.style.color = 'red'
    } else if (listaCurtidas[0].ep6 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 6') {
      curtidaIcon.style.color = 'red'
    } else if (listaCurtidas[0].ep7 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 7') {
      curtidaIcon.style.color = 'red'
    }
    else if (listaCurtidas[0].ep8 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 8') {
      curtidaIcon.style.color = 'red'
    }
    else if (listaCurtidas[0].ep9 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 9') {
      curtidaIcon.style.color = 'red'
    }
    else {
      curtidaIcon.style.color = 'white'
    }
  })
}

/* CURTIDA */
var jaCurtiu = false
let listaCurtidas = [
  {
    ep1: 0,
    ep2: 0,
    ep3: 0,
    ep4: 0,
    ep5: 0,
    ep6: 0,
    ep7: 0,
    ep8: 0,
    ep9: 0,
  }
]


curtidaIcon.addEventListener("click", function () {
  if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 1') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep1 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 1!");
      listaCurtidas[0].ep1 = 1;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 1");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }

    enviarCurtida()

  } else if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 2') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep2 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 2!");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 1;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 2");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }
    enviarCurtida()

  } else if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 3') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep3 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 3!");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 1;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 3");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }
    enviarCurtida()

  } else if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 4') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep4 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 4!");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 1;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 4");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }

    enviarCurtida()
  } else if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 5') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep5 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 5!");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 1;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 5");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }

    enviarCurtida()
  } else if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 6') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep6 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 6!");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 1;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 6");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }

    enviarCurtida()
  } else if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 7') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep7 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 7!");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 1;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 7");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }

    enviarCurtida()
  } else if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 8') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep8 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 8!");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 1;
      listaCurtidas[0].ep9 = 0;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 8");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }

    enviarCurtida()
  } else if (jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 9') {
    if ((curtidaIcon.style.color === "" || curtidaIcon.style.color === "white") && listaCurtidas[0].ep9 === 0) {
      curtidaIcon.style.color = "red";
      alert("Você curtiu o episódio 9!");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 1;
    } else {
      curtidaIcon.style.color = "white";
      alert("Você descurtiu o episódio 9");
      listaCurtidas[0].ep1 = 0;
      listaCurtidas[0].ep2 = 0;
      listaCurtidas[0].ep3 = 0;
      listaCurtidas[0].ep4 = 0;
      listaCurtidas[0].ep5 = 0;
      listaCurtidas[0].ep6 = 0;
      listaCurtidas[0].ep7 = 0;
      listaCurtidas[0].ep8 = 0;
      listaCurtidas[0].ep9 = 0;
    }
    enviarCurtida()
  }
  
});

// vai rodar no inicio da pagina
function verificarCurtida() {
  fetch("/usuarios/verificarCurtida", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idUsuarioServer: sessionStorage.ID_USUARIO
    })
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO Ellie()!")

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));

          if (json.length > 0) {
            listaCurtidas[0].ep1 = json[0].ep1
            listaCurtidas[0].ep2 = json[0].ep2
            listaCurtidas[0].ep3 = json[0].ep3
            listaCurtidas[0].ep4 = json[0].ep4
            listaCurtidas[0].ep5 = json[0].ep5
            listaCurtidas[0].ep6 = json[0].ep6
            listaCurtidas[0].ep7 = json[0].ep7
            listaCurtidas[0].ep8 = json[0].ep8
            listaCurtidas[0].ep9 = json[0].ep9

            if (listaCurtidas[0].ep1 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 1') {
              curtidaIcon.style.color = 'red'
            } else if (listaCurtidas[0].ep2 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 2') {
              curtidaIcon.style.color = 'red'
            } else if (listaCurtidas[0].ep3 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 3') {
              curtidaIcon.style.color = 'red'
            } else if (listaCurtidas[0].ep4 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 4') {
              curtidaIcon.style.color = 'red'
            } else if (listaCurtidas[0].ep5 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 5') {
              curtidaIcon.style.color = 'red'
            } else if (listaCurtidas[0].ep6 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 6') {
              curtidaIcon.style.color = 'red'
            } else if (listaCurtidas[0].ep7 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 7') {
              curtidaIcon.style.color = 'red'
            }
            else if (listaCurtidas[0].ep8 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 8') {
              curtidaIcon.style.color = 'red'
            }
            else if (listaCurtidas[0].ep9 == 1 && jsonEpisodioTitulo.innerHTML === 'THE LAST OF US: EPISÓDIO 9') {
              curtidaIcon.style.color = 'red'
            }
            else {
              curtidaIcon.style.color = 'white'
            }
            
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
  return false;
}


function enviarCurtida() {
  // primeiro ele verifica novamente
  fetch("/usuarios/verificarCurtida", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idUsuarioServer: sessionStorage.ID_USUARIO
    })
  })
    .then(function (resposta) {
      resposta.json().then(json => {
        console.log(json);
        console.log(JSON.stringify(json));


        // Se alguma das variaveis retornou 1, quer dizer q tem
        if (json.length > 0) {
          jaCurtiu = true
          fetch("/usuarios/enviarCurtida", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              curtidaEP1Server: listaCurtidas[0].ep1,
              curtidaEP2Server: listaCurtidas[0].ep2,
              curtidaEP3Server: listaCurtidas[0].ep3,
              curtidaEP4Server: listaCurtidas[0].ep4,
              curtidaEP5Server: listaCurtidas[0].ep5,
              curtidaEP6Server: listaCurtidas[0].ep6,
              curtidaEP7Server: listaCurtidas[0].ep7,
              curtidaEP8Server: listaCurtidas[0].ep8,
              curtidaEP9Server: listaCurtidas[0].ep9,
              idServer: sessionStorage.ID_USUARIO,
              jaCurtiuServer: jaCurtiu
            })
          })

        } else {
          jaCurtiu = false
          fetch("/usuarios/enviarCurtida", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              curtidaEP1Server: listaCurtidas[0].ep1,
              curtidaEP2Server: listaCurtidas[0].ep2,
              curtidaEP3Server: listaCurtidas[0].ep3,
              curtidaEP4Server: listaCurtidas[0].ep4,
              curtidaEP5Server: listaCurtidas[0].ep5,
              curtidaEP6Server: listaCurtidas[0].ep6,
              curtidaEP7Server: listaCurtidas[0].ep7,
              curtidaEP8Server: listaCurtidas[0].ep8,
              curtidaEP9Server: listaCurtidas[0].ep9,
              idServer: sessionStorage.ID_USUARIO,
              jaCurtiuServer: jaCurtiu
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
          return false;
        }
      })
    })



}