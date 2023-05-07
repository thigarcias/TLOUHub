primeiroNome.value = "Thiago"
sobrenome.value = "Garcia"
email.value = "thiagogarcia526@gmail.com"
senha.value = "12345678"

const criarConta = document.getElementById("criarConta")
const homepagetexto = document.getElementById("homepagetexto")
const logintexto = document.getElementById("logintexto")

criarConta.addEventListener("mouseover", function(){
    criarConta.style.backgroundColor = "#5D8357"
}),

criarConta.addEventListener("mouseout", function(){
    criarConta.style.backgroundColor = "#448D19"
}),

homepagetexto.addEventListener("mouseover", function(){
    homepagetexto.style.color = "#60844B"
}),

homepagetexto.addEventListener("mouseout", function(){
    homepagetexto.style.color = "#9b9595cb"
})

logintexto.addEventListener("mouseover", function(){
    logintexto.style.color = "#60844B"
}),

logintexto.addEventListener("mouseout", function(){
    logintexto.style.color = "#9b9595cb"
})

homepagetexto.addEventListener("click", function(){
    window.location.href = "../PaginaInicial/home.html"
})