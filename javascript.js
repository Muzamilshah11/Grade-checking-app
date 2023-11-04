function Gradingapp(event){
    console.log("Button Active!");
    event.preventDefault();

    
    let Userinput = document.querySelector("#userinput").value;
    Userinput = Number(Userinput);


     if(Userinput > 100 ) {
         document.querySelector("#showme").innerHTML= "Ooops! Wrong Value. Try Again!" ;

        }else if(Userinput <0){
        document.querySelector("#showme").innerHTML= "Ooops! Wrong Value. Try Again!";
        }
    
    
        else if(Userinput >= 80){
    
        document.querySelector("#showme").innerHTML= "Your Grade is:-- A+";
    } else if(Userinput >=70 ) {
        
        document.querySelector("#showme").innerHTML= "Your Grade is:-- A" ;
    }
    else if(Userinput >= 60){
       
        document.querySelector("#showme").innerHTML= "Your Grade is:-- B";
    }else if(Userinput >= 50){
       
        document.querySelector("#showme").innerHTML= "Your Grade is:-- C";
    }else if(Userinput >= 40){
        
        document.querySelector("#showme").innerHTML= "Your Grade is:-- D" ;
    }else if(Userinput >=33){
       
        document.querySelector("#showme").innerHTML= "Your Grade is:-- E" ;
    }else if(Userinput < 33) {
        
        document.querySelector("#showme").innerHTML= "Ooops! You are Fail.Try Again!" ;
    }

}