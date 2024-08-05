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