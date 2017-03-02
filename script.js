document.getElementById("orb").addEventListener("click",function(){
    changeTonight()
});
function changeTonight(){
   if(document.getElementById("sky").className == "sun"){
       //change to moon
document.getElementById("sky").classname = "night";
document.getElementById("orb").className = "moon";
document.getElementById("moonspot1").className = "visible";
document.getElementById("moonspot2").className = "visible";
document.getElementById("moonspot3").className = "visible";
   }
   else if(document.getElementById("orb").className == "moon"){
       //change to sun
       document.getElementById("sky").className = "day";
       document.getElementById("orb").className = "sun";
       document.getElementById("moonspot1").className = "";
       document.getElementById("moonspot2").className = "";
       document.getElementById("moonspot3").className = "";
   }
    
}