document.addEventListener('DOMContentLoaded', function(){
  
  var botao=document.getElementById('cabm')
  var menu=document.getElementById('nav')
  
  botao.addEventListener('click',function(){
    menu.style.display=(menu.style.display=== 'none')?'block':'none';
  })
  document.addEventListener('click',function(event){
    var natela=botao.contains(event.target)
    var nobotao=menu.contains(event.target)
    
    if(!natela && !nobotao){
      menu.style.display="none"
    }
  })
})

var art1 = document.getElementById('art1').addEventListener('click',function(){
  window.location.assign('https://www.sestsenat.org.br/noticia/projeto-motorista-srie-a-do-sest-senat-se-destaca-no-prmio-senatran')
})
var art2 = document.getElementById('art2').addEventListener('click', function(){
  window.location.replace('https://www.sestsenat.org.br/noticia/mais-uma-vez-sest-senat--reconhecido-nacionalmente-como-um-excelente-lugar-para-se-trabalhar')
})
var art3 = document.getElementById('art3').addEventListener('click',function(){
  window.location.assign('https://www.sestsenat.org.br/noticia/programa-mais-motoristas-convoca-mais-de-5409-mil-pessoas-para-formao-de-condutores-profissionais')
})