  alert("javascript runs this code when the page loads");
  function  Cleardisplay(){
      document.getElementById("display-bar").innerHTML="";
  }
  
  function display(userInput){
      document.getElementById("display-bar").innerHTML += userInput;
  }
   function calculate(){
      var anwser =  eval(document.getElementById("display-bar").innerHTML);
       document.getElementById("display-bar").innerHTML= anwser; 
   }
  