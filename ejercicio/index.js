const consultar=()=>{

    let name=document.getElementById("name").value
    let age=document.getElementById("date").value
    let message=document.getElementById("message")
    console.log(age)
    let date=age.split("-")
    

      let year=parseInt(date[0]);
      let month=parseInt(date[1]);
      let day=parseInt(date[2]);
      
      let currentDate=new Date();
      let currentYear=parseInt(currentDate.getFullYear());
      let currentMonth=parseInt(currentDate.getMonth());
      let currentDay=parseInt(currentDate.getDate());
      console.log(currentMonth)

      if(name==""){
        document.getElementById("message").innerHTML="insert your name"

      }else{
        if(age==""){
          document.getElementById("message").innerHTML="insert your birth date "

        }else{
          if(currentYear-year>18){
            message.innerHTML=name + " you can vote"}
          else if(currentYear-year>=18 && currentMonth+1-month>=0 && currentDay-day>=0){
            message.innerHTML=name + " you can vote"
            
          }else{
            message.innerHTML=name +" you can't vote"
          }

        }
      }


      

      
  }