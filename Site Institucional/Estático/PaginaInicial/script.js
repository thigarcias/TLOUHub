const headerinfinitaFundo = document.getElementById("headerinfinitaFundo")
headerinfinitaFundo.style.display = "none";
headerinfinitaFundo.style.zIndex = 2;

// Adicione a um ID, no caso a pagina toda 'window', um evento (addEventListener), que no caso é o evento "scroll", uma função()

window.addEventListener("scroll", function() {
    var posicaoScroll = window.pageYOffset

    // verifique se o usuário chegou à posição desejada da página
    if (posicaoScroll <= 100) {
    headerinfinitaFundo.style.display = "none"
    }
    else if (posicaoScroll <= 1800) {
    headerinfinitaFundo.style.display = "flex";
    headerinfinitaFundo.style.backgroundColor = '#fc9802ee';
  } else if (posicaoScroll <= 3400){
    headerinfinitaFundo.style.display = "flex";
    headerinfinitaFundo.style.backgroundColor = '#055a18ee';
  } else if (posicaoScroll >= 3400){
    headerinfinitaFundo.style.display = "flex";
    headerinfinitaFundo.style.backgroundColor = '#323729f8';
  }
}); 

/* Animação navbar */
  const noticiastexto = document.getElementById('noticiastexto');
  const noticiastextoInfinito = document.getElementById('noticiastextoInfinito');
  const jogostexto = document.getElementById('jogostexto');
  const serietexto = document.getElementById('serietexto');

  noticiastexto.style.color = '#ffffff;';
// Adicione um evento a um ID do HTML, no caso noticiastexto, a função mouseover que é equivalente ao :hover do CSS, execute a função function() 
  noticiastexto.addEventListener('mouseenter', function(){
    console.log ("Oiee")
    noticiastexto.style.color = '#ffe70c';
  }),
  noticiastexto.addEventListener('mouseout', function(){
    noticiastexto.style.color = '#ffffff';
  }),
  jogostexto.addEventListener("mouseover", function(){
    jogostexto.style.color = '#ffe70c';
  }),
  jogostexto.addEventListener('mouseout', function(){
    jogostexto.style.color = '#ffffff';
  }),
  serietexto.addEventListener("mouseover", function(){
    serietexto.style.color = '#ffe70c';
  }),
  serietexto.addEventListener('mouseout', function(){
    serietexto.style.color = '#ffffff';
  });


  /* Animação dos blocos Onde */

  const ondeAnimationSteam = document.getElementById('ondeAnimationSteam')
  const ondeAnimationEpic = document.getElementById('ondeAnimationEpic')
  const ondeAnimationPSN = document.getElementById('ondeAnimationPSN')
  const ondeAnimationPSNTLOU2 = document.getElementById('ondeAnimationPSNTLOU2')
  const ondeSteam = document.getElementById('ondeSteam')
  const ondeEpic = document.getElementById('ondeEpic')
  const ondePSN = document.getElementById('ondePSN')
  const ondePSNTLOU2 = document.getElementById('ondePSNTLOU2')
  const ondeTLOUHBO = document.getElementById('ondeTLOUHBO')
  const ondeAnimationHBO = document.getElementById('ondeAnimationHBO')
  
  ondeSteam.addEventListener("mouseover", function(){
    ondeAnimationSteam.style.animationName = "ondeA"
  }),
  ondeSteam.addEventListener("mouseout", function(){
    ondeAnimationSteam.style.animationName = "ondeAReverse"
  }),
  ondeEpic.addEventListener("mouseover", function(){
    ondeAnimationEpic.style.animationName = "ondeA"
  }),
  ondeEpic.addEventListener("mouseout", function(){
    ondeAnimationEpic.style.animationName = "ondeAReverse"
  }),

  ondePSN.addEventListener("mouseover", function(){
    ondeAnimationPSN.style.animationName = "ondeA"
  }),
  ondePSN.addEventListener("mouseout", function(){
    ondeAnimationPSN.style.animationName = "ondeAReverse"
  }),
  ondePSNTLOU2.addEventListener("mouseover", function(){
    ondeAnimationPSNTLOU2.style.animationName = "ondeA"
  }),
  ondePSNTLOU2.addEventListener("mouseout", function(){
    ondeAnimationPSNTLOU2.style.animationName = "ondeAReverse"
  });
  ondeTLOUHBO.addEventListener("mouseover", function(){
    ondeAnimationHBO.style.animationName = "ondeA"
  }),
  ondeTLOUHBO.addEventListener("mouseout", function(){
    ondeAnimationHBO.style.animationName = "ondeAReverse"
  });
  

 