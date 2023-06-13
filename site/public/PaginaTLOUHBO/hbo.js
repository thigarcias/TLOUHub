// Funções que serão executadas ao carregar a página
window.onload = verificarCurtida()
window.onload = validarSessao()
window.onload = ranking()


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

const menuTLOU2 = document.querySelectorAll(".menuTLOU2")
menuTLOU2[0].addEventListener("click", function () {
  window.location = "../PaginaTLOU2/tlou2.html"
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


// LINK PEDRO PASCAL
elenco[0].addEventListener("click", function(){
  window.location.href = 'https://pt.wikipedia.org/wiki/Pedro_Pascal'
})

// LINK Bella Ramsey
elenco[1].addEventListener("click", function(){
  window.location.href = 'https://pt.wikipedia.org/wiki/Bella_Ramseys'
})

// LINK Anna Torv
elenco[2].addEventListener("click", function(){
  window.location.href = 'https://pt.wikipedia.org/wiki/Anna_Torv'
})

// LINK Gabriel Luna
elenco[3].addEventListener("click", function(){
  window.location.href = 'https://pt.wikipedia.org/wiki/Gabriel_Luna'
})

// LINK Nick Offerman
elenco[4].addEventListener("click", function(){
  window.location.href = 'https://pt.wikipedia.org/wiki/Nick_Offerman'
})

// LINK Murray Bartlett
elenco[5].addEventListener("click", function(){
  window.location.href = 'https://pt.wikipedia.org/wiki/Murray_Bartlett'
})

// LINK Nico Parker
elenco[6].addEventListener("click", function(){
  window.location.href = 'https://pt.wikipedia.org/wiki/Nico_Parker'
})

// LINK PEDRO PASCAL
elenco[7].addEventListener("click", function(){
  window.location.href = 'https://en.wikipedia.org/wiki/Storm_Reid'
})


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
    resumo: 'O primeiro episódio de The Last of Us nos apresenta o mundo da série, um Estados Unidos pós-apocalíptico onde um fungo infectou a população, transformando-a em criaturas carnívoras. Conhecemos Joel Miller (Pedro Pascal), um contrabandista encarregado de escoltar uma garota de 14 anos chamada Ellie (Bella Ramsey) pelo país. Ellie é imune à infecção, e os Fireflies, um grupo rebelde, acreditam que ela pode ser a chave para encontrar a cura. O primeiro episódio de The Last of Us nos apresenta o mundo da série, um Estados Unidos pós-apocalíptico onde um fungo infectou a população, transformando-a em criaturas carnívoras. Conhecemos Joel Miller (Pedro Pascal), um contrabandista encarregado de escoltar uma garota de 14 anos chamada Ellie (Bella Ramsey) pelo país. Ellie é imune à infecção, e os Fireflies, um grupo rebelde, acreditam que ela pode ser a chave para encontrar a cura.'
  },

  jsonEp2 = {
    titulo: 'THE LAST OF US: EPISÓDIO 2',
    resumo: 'No episódio 2 de The Last of Us, Joel e Ellie continuam sua jornada pelos Estados Unidos pós-apocalípticos. Eles agora estão fora da zona de quarentena e devem navegar por uma Boston há muito abandonada invadida por infectados. O episódio começa com um flashback de 2003, quando um cientista indonésio faz uma descoberta devastadora. Um fungo infectou a população, transformando-os em criaturas carnívoras. A descoberta do cientista desencadeia uma cadeia de eventos que levará ao colapso da sociedade. Nos dias atuais, Joel e Ellie são forçados a fazer um desvio quando encontram um rebanho de infectados. Eles encontram abrigo em um museu abandonado, mas logo são cercados pelas criaturas. Joel e Ellie devem usar todas as suas habilidades para sobreviver.'
  },

  jsonEp3 = {
    titulo: 'THE LAST OF US: EPISÓDIO 3',
    resumo: 'No episódio 3 de The Last of Us, Joel e Ellie chegam a Pittsburgh, uma cidade que foi invadida por Infectados e bandidos. Eles são forçados a encontrar abrigo em um hotel abandonado, onde conhecem Bill, um sobrevivente que mora na cidade há anos. Bill é um personagem misterioso e inicialmente reluta em ajudar Joel e Ellie. Mas ele finalmente concorda em ajudá-los e fornece-lhes comida, água e armas. Bill também conta a Joel e Ellie sobre seu passado e como ele passou a morar em Pittsburgh. Joel e Ellie descobrem que Bill já foi um empresário de sucesso, mas perdeu tudo quando o surto de infectados começou. Ele agora vive isolado e tornou-se cada vez mais paranóico e desconfiado dos outros. Mas ele ainda tem uma queda por Ellie e concorda em ajudá-la a encontrar Tommy.'
  },

  jsonEp4 = {
    titulo: 'THE LAST OF US: EPISÓDIO 4',
    resumo: 'Depois de abandonar seu caminhão em Kansas City, Missouri, Joel e Ellie tentam escapar sem chamar a atenção de um líder rebelde vingativo. O episódio começa com Joel e Ellie tentando percorrer a cidade a pé. Eles logo são pegos no fogo cruzado de uma batalha entre os vaga-lumes e uma milícia local. Joel e Ellie são forçados a se abrigar em um prédio abandonado, onde acabam sendo encontrados por Kathleen, a líder da milícia. Kathleen é uma mulher implacável e ambiciosa que está determinada a impedir que os Vaga-lumes coloquem as mãos em Ellie. Ela oferece a Joel um acordo: ele pode entregar Ellie ou ela matará os dois. Joel se recusa e Kathleen ordena que seus homens ataquem. Joel e Ellie lutam para sair do prédio e fogem noite adentro. Eles são perseguidos pelos homens de Kathleen, mas conseguem escapar. Eles finalmente seguem para um rio próximo, onde pegam um barco e partem para a Califórnia.'
  },

  jsonEp5 = {
    titulo: 'THE LAST OF US: EPISÓDIO 5',
    resumo: 'No episódio 5 de The Last of Us, Joel e Ellie continuam sua jornada para a Califórnia, mas logo se envolvem em um conflito entre duas facções rivais. O episódio começa com Joel e Ellie chegando a uma pequena cidade dividida por uma guerra civil. A cidade é controlada por duas facções rivais: os Fireflies, que estão tentando encontrar uma cura para a infecção, e os Hunters, que são um grupo de bandidos que atacam os fracos e vulneráveis. Joel e Ellie são pegos no fogo cruzado do conflito e são forçados a tomar partido. Eles eventualmente se juntam aos Vaga-lumes e os ajudam a lutar contra os Caçadores. No final, eles conseguem ajudar os Vaga-lumes a assumir o controle da cidade, mas também sofrem uma perda pessoal.'
  },

  jsonEp6 = {
    titulo: 'THE LAST OF US: EPISÓDIO 6',
    resumo: 'No episódio 6 de The Last of Us, Joel e Ellie finalmente chegam à Califórnia, mas não são recebidos de braços abertos. Em vez disso, eles são recebidos com suspeita e hostilidade. O episódio começa com Joel e Ellie chegando em Jackson, Wyoming, uma pequena cidade que foi reconstruída após o surto. A cidade é administrada por Tommy, irmão de Joel, que agora é o xerife. Tommy inicialmente reluta em ajudar Joel e Ellie, mas acaba concordando em deixá-los ficar na cidade. Joel e Ellie logo descobrem que Jackson não é o porto seguro que eles esperavam. A cidade ainda é atormentada pela infecção e há uma constante ameaça de violência por parte de bandidos e invasores. Joel e Ellie devem usar todas as suas habilidades para sobreviver neste mundo novo e perigoso.'
  },

  jsonEp7 = {
    titulo: 'THE LAST OF US: EPISÓDIO 7',
    resumo: 'No episódio 7 de The Last of Us, Joel e Ellie fazem um desvio para uma cidade próxima para encontrar suprimentos. Enquanto estava lá, Ellie reflete sobre seu passado e seu relacionamento com Joel. O episódio abre com Joel e Ellie chegando em uma pequena cidade que foi abandonada. Eles estão procurando suprimentos, mas logo percebem que a cidade não é segura. A cidade está invadida por infectados, e Joel e Ellie são forçados a lutar por suas vidas. Enquanto eles abrem caminho pela cidade, Ellie começa a refletir sobre seu passado. Ela se lembra de sua vida antes do surto e de seus amigos e familiares que foram mortos. Ela também se lembra de seu relacionamento com Joel e começa a perceber o quanto ele significa para ela. No final, Joel e Ellie conseguem escapar da cidade, mas não saem ilesos. Joel fica ferido e Ellie fica traumatizada com a experiência. Mas eles têm um ao outro e estão determinados a continuar sua jornada.'
  },

  jsonEp8 = {
    titulo: 'THE LAST OF US: EPISÓDIO 8',
    resumo: 'No episódio 8 de The Last of Us, Joel e Ellie são forçados a enfrentar um grupo de sobreviventes canibais. O episódio é um thriller tenso e cheio de suspense que explora o lado mais sombrio da humanidade. O episódio começa com Joel e Ellie chegando a um resort que foi tomado por um grupo de canibais. Os canibais são liderados por um homem chamado David, que é um líder carismático e implacável. David está determinado a capturar Ellie e usá-la para seus próprios propósitos. Joel e Ellie são forçados a lutar por suas vidas enquanto tentam escapar da comunidade do resort. Eles são perseguidos por David e seus homens e são forçados a usar todas as suas habilidades para sobreviver. No final, eles conseguem escapar, mas não saem ilesos. Joel fica ferido e Ellie fica traumatizada com a experiência. O episódio termina com Joel e Ellie tomando uma decisão difícil. Eles devem decidir se continuam sua jornada para a Califórnia ou ficam em Jackson e tentam construir uma nova vida.'
  },
  jsonEp9 = {
    titulo: 'THE LAST OF US: EPISÓDIO 9',
    resumo: 'No final da temporada de The Last of Us, Joel e Ellie finalmente chegam à sede dos Fireflies na Califórnia. No entanto, eles logo percebem que as coisas não são o que parecem. Os vaga-lumes não são o grupo benevolente que pareciam ser e estão dispostos a fazer o que for preciso para encontrar uma cura para a infecção, mesmo que isso signifique sacrificar Ellie. Joel se depara com uma decisão difícil: ele pode deixar os vaga-lumes matarem Ellie para encontrar uma cura ou pode desafiá-los e salvar sua vida. No final, Joel opta por salvar Ellie, mesmo que isso signifique sacrificar a chance de encontrar uma cura. O episódio termina com Joel e Ellie deixando o quartel-general dos Fireflies e partindo por conta própria. Eles agora são fugitivos, mas estão determinados a encontrar uma nova vida juntos.'
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
if (sessionStorage.ID_USUARIO == null || sessionStorage.ID_USUARIO == undefined || sessionStorage.ID_USUARIO == ''){
  alert("Você precisa estar logado para curtir um episódio!")
} else {

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
  }
  }
  enviarCurtida()
  setTimeout(ranking, 1000)
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


// RANKING DE CURTIDAS
var rankingVetor = []
function ranking() {
  fetch("/usuarios/ranking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // body: JSON.stringify({
    //   idUsuarioServer: sessionStorage.ID_USUARIO
    // })
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO Ellie()!")

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));

          rankingVetor[0] = json[0].EP1
          rankingVetor[1] = json[0].EP2
          rankingVetor[2] = json[0].EP3
          rankingVetor[3] = json[0].EP4
          rankingVetor[4] = json[0].EP5
          rankingVetor[5] = json[0].EP6
          rankingVetor[6] = json[0].EP7
          rankingVetor[7] = json[0].EP8
          rankingVetor[8] = json[0].EP9

          grafico_rank1.update()

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



// GRAFICO DO RANKING BONITO LINDO

const labels_linha = [
  'EP 1',
  'EP 2',
  'EP 3',
  'EP 4',
  'EP 5',
  'EP 6',
  'EP 7',
  'EP 8',
  'EP 9'
];

// GRÁFICO ELLIE 
const rank = document.getElementById('grafico_ranking');
// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
const data_rank = {
  labels: labels_linha,
  datasets: [{
      label: 'CURTIDAS',
      data: rankingVetor,
      backgroundColor: '#4d0000',
      borderColor: '#cc0000',
      borderWidth: 2
  }
  ]
};

const rank_config = {
  type: 'bar',
  data: data_rank,
  options: {
      maintainAspectRatio: false,
      
      scales: {
          y: {
              ticks: {
                  beginAtZero: true,
                  color: 'white',
                  font: {
                      size: 18,
                      family: 'Montserrat Ace',
                      weight: 500
                  }
              },
          },
          x: {
              ticks: {
                  color: 'white',
                  font: {
                      size: 18,
                      family: 'Montserrat Ace',
                      weight: 500
                  }
              }
          }
      },
      plugins: {
  legend: {
              labels: {
                  color:'white',
                  font: {
                      size: 18,
                      family: 'Montserrat Ace',
                      weight: 500
                  }
              }
          }
      }
  }
};

const grafico_rank1 = new Chart(rank, rank_config);