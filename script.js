let screen = document.getElementById("input");
buttons = document.querySelectorAll("button");
let screenvalue =" "
 for(item of buttons ){
     item.addEventListener('click',  (e) =>{
         buttonText = e.target.innerText;
    
        
        if(buttonText == "AC"){
            screenvalue = " ";
            screen.value = screenvalue;
        }else if(buttonText == "="){
            
            screen.value = eval(screenvalue);
           
        }
        else  if (buttonText == "DEL"){
          
           
            screen.value =  screen.value.substr(0,screen.value.length-1);
          
        } 
        else {
                screenvalue += buttonText;
                screen.value = screenvalue;
            }
        
     })
    }
