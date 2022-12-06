// variables de los tres valores
let stone=1;
let paper=2;
let scissor=3;
//direcciones de las imagenes
const img_stone="https://c0.klipartz.com/pngpicture/422/99/gratis-png-tijeras-de-piedra-papel-iconos-de-computadora-tijeras-thumbnail.png"
const img_paper="https://static.thenounproject.com/png/477912-200.png"
const img_scissor="https://img2.freepng.es/20180612/avw/kisspng-hand-rockpaperscissors-computer-icons-clip-a-botten-5b207ab13ddf51.5333045115288552172534.jpg"
//llamada de los botones
let btn_stone=document.getElementById("stone")
let btn_paper=document.getElementById("paper")
let btn_scissor=document.getElementById("scissor")
btn_stone.addEventListener("click", set_stone)
btn_paper.addEventListener("click", set_paper)
btn_scissor.addEventListener("click", set_scissor)

//
let score_player=document.getElementById("score_player")
let score_machine=document.getElementById("score_machine")

//contadores de puntaje
var player =0;
var machine=0;


//funcion del boton piedra
function set_stone (){
  document.getElementById("img_player").setAttribute("src",img_stone)
  let random= Math.floor(Math.random() * 3)+1;
  if(random==1){
    document.getElementById("img_machine").setAttribute("src",img_stone)
  }else if (random==2){
    document.getElementById("img_machine").setAttribute("src",img_paper)
    machine+=1
    score_machine.innerHTML=machine

  }else if (random==3){
    document.getElementById("img_machine").setAttribute("src",img_scissor)
    player+=1
    score_player.innerHTML=player

  }
  end()

 
  
}
//funcion del boton papel
function set_paper (){
  document.getElementById("img_player").setAttribute("src",img_paper)
  let random= Math.floor(Math.random() * 3)+1;
  if(random==1){
    document.getElementById("img_machine").setAttribute("src",img_stone)
    player+=1
    score_player.innerHTML=player
  }else if (random==2){
    document.getElementById("img_machine").setAttribute("src",img_paper)

  }else if (random==3){
    document.getElementById("img_machine").setAttribute("src",img_scissor)
    machine+=1
    score_machine.innerHTML=machine

  } 
  end()
 
}


//funcion del boton tijera
function set_scissor (){
  document.getElementById("img_player").setAttribute("src",img_scissor)
  let random= Math.floor(Math.random() * 3)+1;
  if(random==1){
    document.getElementById("img_machine").setAttribute("src",img_stone)
    machine+=1
    score_machine.innerHTML=machine
  }else if (random==2){
    document.getElementById("img_machine").setAttribute("src",img_paper)
    player+=1
    score_player.innerHTML=player

  }else if (random==3){
    document.getElementById("img_machine").setAttribute("src",img_scissor)

  }
  end()
 

  
}


function end(){
  if(machine==3){
    let machines= document.getElementById("message")
      machines.innerHTML="maquina gana"
  
    setTimeout(()=>{
      
      window.location.reload()
      
    },"3000")
  
   
  
  
  
  }else if(player==3){
    let players =document.getElementById("message")
      players.innerHTML="jugador gana"
    
    setTimeout(()=>{
      
      window.location.reload()
      
    },"3000")
   
    
  }

}



