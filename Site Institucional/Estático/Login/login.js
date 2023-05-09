email.value = "thiagogarcia526@gmail.com"
senha.value = "12345678"

const criarConta = document.getElementById("criarConta")
const homepagetexto = document.getElementById("homepagetexto")
const cadastrotexto = document.getElementById("cadastrotexto")
const entre = document.getElementById("entre")

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

cadastrotexto.addEventListener("mouseover", function(){
    cadastrotexto.style.color = "#60844B"
}),

cadastrotexto.addEventListener("mouseout", function(){
    cadastrotexto.style.color = "#9b9595cb"
})

homepagetexto.addEventListener("click", function(){
    window.location.href = "../PaginaInicial/home.html"
})

entre.addEventListener("click", function(){
    window.location.href = "../Cadastro/cadastro.html"
})

cadastrotexto.addEventListener("click", function(){
    window.location.href = "../Cadastro/cadastro.html"
})

