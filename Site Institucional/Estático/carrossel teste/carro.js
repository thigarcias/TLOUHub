var carroselItems = document.querySelectorAll(".imagem")
var carroselIndex = 0;

function slideAtual(n){
    carroselItems[carroselIndex].classList.remove("ativa");
    carroselIndex = (carroselIndex + n) % carroselItems.length
    carroselItems[carroselIndex].classList.add("ativa")
}

const proximaImagem = document.getElementById("proximaImagem")
const anteriorImagem = document.getElementById("anteriorImagem")
proximaImagem.addEventListener("click", function(){
    slideAtual(1);
})
anteriorImagem.addEventListener("click", function(){
    slideAtual(-1)
})