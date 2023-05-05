var carroselItems = document.querySelectorAll(".slide")
var carroselIndex = 0;

function slideAtual(n){
    carroselItems[carroselIndex].classList.remove("ativa");
    carroselIndex = (carroselIndex + n) % carroselItems.length
    carroselItems[carroselIndex].classList.add("ativa")
}

const personagemProximo = document.getElementById("personagemProximo")
const personagemAnterior = document.getElementById("personagemAnterior")
personagemProximo.addEventListener("click", function(){
    slideAtual(1);
})
personagemAnterior.addEventListener("click", function(){
    slideAtual(-1)
})