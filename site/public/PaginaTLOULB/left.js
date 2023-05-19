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