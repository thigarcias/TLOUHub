const homepagetexto = document.getElementById("homepagetexto")
const noticiastexto = document.getElementById("noticiastexto")
const jogostexto = document.getElementById("jogostexto")
const serietexto = document.getElementById("serietexto")
const blurCadastro = document.getElementById("blurCadastro")
const conta_botao = document.getElementById("conta_botao")

homepagetexto.addEventListener("click", function(){
    window.location = "../PaginaInicial/home.html"
}),

blurCadastro.addEventListener("click", function() {
    window.location = "../Cadastro/cadastro.html"
})

conta_botao.addEventListener("click", function(){
    limparSessao()
})


/* JSON das Noticias*/

var listaNoticias = [
    {
        imagem: 'url("./assets/8879118.webp")',
        titulo: 'The Last of Us: Part I ganha update 1.0.5 no PC com novas otimizações',
        subtitulo: 'O novo patch promete encurtar os tempos de carregamento de shaders e otimizar o uso de CPU de The Last of Us',
        creditos: 'Por Adrenaline',
        paragrafo1: 'A Naughty Dog e a Iron Galaxy liberaram na última quinta-feira (9) o download do patch 1.0.5 para a versão PC de The Last of Us: Part I. Nele, as desenvolvedoras adicionaram novas otimizações de desempenho e prometem uma redução no tempo que o game leva para compilar shaders ao ser iniciado pela primeira vez. O update também traz “códigos otimizados” para aumentar a performance global de CPUs, otimiza processos de entregas de conteúdos e diminui o tempo de duração de telas de carregamento. As configurações do jogo também ganharam uma nova opção para ajustar níveis de densidade de efeitos, que permite ter mais controle sobre o desempenho final da aventura.'
    },
      {
        imagem: 'url("./assets/vlcsnap-2023-01-05-16h53m45s908.jpg")',
        titulo: 'Essa é a noticia 2',
        subtitulo: 'Esse é o subtitulo da noticia 2',
        creditos: 'Por Noticia 2',
        paragrafo1: 'A Naughty Dog e a Iron Galaxy liberaram na última quinta-feira (9) o download do patch 1.0.5 para a versão PC de The Last of Us: Part I. Nele, as desenvolvedoras adicionaram novas otimizações de desempenho e prometem uma redução no tempo que o game leva para compilargijsggewijgioerghorehgergue duração de telas de carregamento. As configurações do jogo também ganharam uma nova opção para ajustar níveis de densidade de efeitos, que permite ter mais controle sobre o desempenho final da aventura.'
    }
]
const noticia1 = document.getElementById("noticia1")
const noticia2 = document.getElementById("noticia2")

// Css da imagem
const noticiaPrincipal = document.getElementById("noticiaPrincipal")

const tituloNoticia = document.getElementById("tituloNoticia")
const subtituloNoticia = document.getElementById("subtituloNoticia")
const creditosNoticia = document.getElementById("creditosNoticia")
const paragrafo1 = document.getElementById("paragrafo1")

noticia1.addEventListener("click", function(){
    noticiaPrincipal.style.backgroundImage = `${listaNoticias[0].imagem}`
    tituloNoticia.innerHTML = `${listaNoticias[0].titulo}`
    subtituloNoticia.innerHTML = `${listaNoticias[0].subtitulo}`
    creditosNoticia.innerHTML = `${listaNoticias[0].creditos}`
    paragrafo1.innerHTML = `${listaNoticias[0].paragrafo1}`
})
noticia2.addEventListener("click", function(){
    noticiaPrincipal.style.backgroundImage = `${listaNoticias[1].imagem}`
    tituloNoticia.innerHTML = `${listaNoticias[1].titulo}`
    subtituloNoticia.innerHTML = `${listaNoticias[1].subtitulo}`
    creditosNoticia.innerHTML = `${listaNoticias[1].creditos}`
    paragrafo1.innerHTML = `${listaNoticias[1].paragrafo1}`
})