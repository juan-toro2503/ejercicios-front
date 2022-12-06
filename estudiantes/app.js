class Persona{
  constructor(name, age, km){
    this._name = name;
    this._age=age;
    this._km=km;
  }
  get name(){
    return this._name;

  }
  get age(){
    return this._age;
  }
  get km(){
    return this._km;
  }
}

const diurna=[];
const mixta=[];
const nocturna=[];

document.getElementById("btn-send").addEventListener("click",save)

function save(){
  let name=document.getElementById("name")
  let age=document.getElementById("age")
  let km=document.getElementById("km")


  let showName=document.getElementById("showName");
  let showAge=document.getElementById("showAge");
  let showKm=document.getElementById("showKm");
  let message=document.getElementById("message");



  if(age.value>17 && km.value<=10){
    if(nocturna.length<15){
      let student=new Persona(name.value, age.value, km.value);
      nocturna.push(student)
      showName.innerHTML=student.name
      showAge.innerHTML=student.age
      showKm.innerHTML=student.km
      message.innerHTML="usted fue asignado a la jornada nocturna"
    }else{
      alert("la ficha de la jornada nocturna ya está llena")
    }
    }else if(age.value>17 && km.value>10){
      if(mixta.length<15){
        let student=new Persona(name.value, age.value, km.value);
        mixta.push(student)
        showName.innerHTML=student.name
        showAge.innerHTML=student.age
        showKm.innerHTML=student.km
        message.innerHTML="usted fue asignado a la jornada mixta"
      }else{
        alert("la ficha de la jornada mixta ya está llena")
      }
    }else  if(age.value<18 || km.value>10){
    
      if(diurna.length<15){
        let student=new Persona(name.value, age.value, km.value);
        diurna.push(student)
        showName.innerHTML=student.name
        showAge.innerHTML=student.age
        showKm.innerHTML=student.km
        message.innerHTML="usted fue asignado a la jornada diurna"
        
      }else{
        alert("la ficha de la jornada diurna ya está llena")
      }
      
    }
    showDiurna()
    showMixta()
    showNocturna()


    
   
    
  }

function showDiurna(){
  let string=`<h4>nombre</h4>
  <h4>edad</h4>
  <h4>distancia:</h4>
  <h4>jornada</h4>`
  for(let persona of diurna){
    string+=`<p>${persona.name}</p>
    <p>${persona.age}</p>
    <p>${persona.km}</p>
    <p>diurna</p>`
  }
  document.getElementById("diurna").innerHTML=string
}
function showMixta(){
  let string=`<h4>nombre</h4>
  <h4>edad</h4>
  <h4>distancia:</h4>
  <h4>jornada</h4>`
  for(let persona of mixta){
    string+=`<p>${persona.name}</p>
    <p>${persona.age}</p>
    <p>${persona.km}</p>
    <p>Mixta</p>`
  }
  document.getElementById("mixta").innerHTML=string
}
function showNocturna(){
  let string=`<h4>nombre</h4>
  <h4>edad</h4>
  <h4>distancia:</h4>
  <h4>jornada</h4>`
  for(let persona of nocturna){
    string+=`<p>${persona.name}</p>
    <p>${persona.age}</p>
    <p>${persona.km}</p>
    <p>Nocturna</p>`
  }
  document.getElementById("nocturna").innerHTML=string
}


