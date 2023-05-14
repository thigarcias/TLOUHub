const homepagetexto = document.getElementById("homepagetexto")
const noticiastexto = document.getElementById("noticiastexto")
const jogostexto = document.getElementById("jogostexto")
const serietexto = document.getElementById("serietexto")
const blurCadastro = document.getElementById("blurCadastro")

homepagetexto.addEventListener("click", function(){
    window.location = "../PaginaInicial/home.html"
}),

blurCadastro.addEventListener("click", function() {
    window.location = "../Cadastro/cadastro.html"
})
