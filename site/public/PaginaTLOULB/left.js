// Riley no Conheça
const conhecaConteudo = document.querySelectorAll(".conhecaConteudo")
const conhecaGradiente = conhecaConteudo[1].querySelector("#conhecaGradiente")
const conhecaPersonagem = conhecaConteudo[1].querySelector("#conhecaPersonagem")
const conhecaLinha = conhecaConteudo[1].querySelector("#conhecaLinha")
const conhecaTexto = conhecaConteudo[1].querySelector("#conhecaTexto")

conhecaConteudo[1].style.marginLeft = '6%'
conhecaGradiente.style.background = 'linear-gradient(180deg, rgba(86, 82, 50, 0.34) 7.11%, rgba(43, 46, 33, 0.27) 100%);'
conhecaPersonagem.style.backgroundImage = `url('./assets/Part_I_Riley_infobox.webp')`
conhecaLinha.style.backgroundColor = "#3E3725"
conhecaTexto.innerHTML = `RILEY ABEL`


// Containers
const container = document.querySelectorAll(".container")
container[0].style.height = "100vh"
container[0].style.flexDirection = "column"
container[1].style.flexDirection = "column"
container[2].style.height = "80vh"

// Carrossel
const carrossel = document.querySelectorAll(".carrossel")
const carrosselPersonagem = document.querySelectorAll(".carrosselPersonagem")
carrosselPersonagem[1].style.backgroundImage = `url('./assets/bnbd.png')`

const episodioVoltar = document.getElementById("episodioVoltar")
const episodioProceder = document.getElementById("episodioProceder")

episodioProceder.addEventListener("click", function(){
    carrossel[0].scrollLeft += 2500
})

episodioVoltar.addEventListener("click", function(){
    carrossel[0].scrollLeft -= 2500
})

const personagemTexto = carrosselPersonagem[1].querySelector("#personagemTexto")
const descricao1 = carrosselPersonagem[1].querySelector('#descricao1')
const descricao2 = carrosselPersonagem[1].querySelector('#descricao1')
const personagemTipo = carrosselPersonagem[1].querySelector(".personagemTipo")
const personagemTitulo = carrosselPersonagem[1].querySelector("#personagemTitulo")

personagemTitulo.style.color = `#48E3D1`
personagemTexto.innerHTML = `RILEY ABEL`
descricao1.innerHTML = `Riley Abel é uma personagem importante em The Last of Us, aparecendo no DLC The Last of Us: Left Behind. Ela é amiga de infância de Ellie e, no início do jogo, as duas estão separadas depois de uma briga.`
descricao2.innerHTML = `Durante os eventos de Left Behind, Ellie descobre que Riley ainda está viva e está esperando por ela em um shopping center abandonado. As duas passam as últimas horas juntas, explorando o shopping center e relembrando as memórias que tiveram juntas.`
personagemTipo.style.background = `linear-gradient(89.96deg, rgba(66, 119, 106, 0.25) 18.83%, rgba(6, 253, 208, 0) 84.16%)`



// Saiba Mais
const saibaConteudo = document.querySelectorAll(".saibaConteudo")
const saibaImagem = saibaConteudo[1].querySelector("#saibaImagem")
const saibaTexto = saibaConteudo[1].querySelector("#saibaTexto")
const saibaGradiente = saibaConteudo[1].querySelector("#saibaGradiente")

saibaTexto.innerHTML = `THE LAST OF US: PART I`
saibaImagem.style.backgroundImage = `url(./assets/wYq1UsVEyQp6dT6cS1omgKiJ.webp)`
saibaGradiente.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.3864) 58.7%, rgba(255, 255, 255, 0) 95.31%)'

// IR CIMA
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


/* BOTAO PARA DESLOGAR */
const conta_botao = document.getElementById("conta_botao")
conta_botao.addEventListener("click", function () {
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
menuTLOULB[0].addEventListener("click", function(){
    window.location = "../PaginaTLOULB/left.html"
})

const homepagetexto = document.getElementById("homepagetexto")

homepagetexto.addEventListener("click", function () {
    window.location.href = "../PaginaInicial/home.html"
}),s


