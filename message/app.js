let name=document.getElementById("input_name")
let comment=document.getElementById("comment")
let btn_sed=document.getElementById("btn_send")

comment.addEventListener("keypress",quantity)



function quantity(){
    
    if(comment.value.length<=250){
        let contador=document.getElementById("contador")
        let letters=comment.value.length
        contador.innerHTML=letters
        if(comment.value.length>200){
            
        }else{
            contador.style.color="red"
        }

    }else{
        alert("no puedes ingresar mas de 250 caracteres")
    }  
}

let typeLetter="";
let mayuscula=document.getElementById("btn_mayusculas")
mayuscula.addEventListener("click",ponerMayusculas)

function ponerMayusculas(){
  
  let mayusculas=comment.value
  mayusculas.toUpperCase()
  typeLetter=mayusculas
  console.log(typeLetter)
}
let minusculas=document.getElementById("btn_minusculas")
minusculas.addEventListener("click",ponerMinusculas)

function ponerMinusculas(){
  let minuscula=comment.value
  minuscula.toLowerCase()
  typeLetter=minuscula
}
name.addEventListener("keyup",showName)
function showName(event){
  if(event.code=="Enter"){
  let name_header=document.getElementById("name")
  let firstLetter=name.value.split("")
  document.getElementById("first_letter").innerHTML=firstLetter[0]
  name_header.innerHTML=name.value
  }
    
}

btn_send.addEventListener("click",send)

function send(){
    let show=document.getElementById("show")
    show.innerHTML=typeLetter/* toUpperCase() */
}

