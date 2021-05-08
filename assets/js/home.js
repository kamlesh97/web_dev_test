function myFunction() {
    document.getElementById("panel").style.display = "flex ";
    document.getElementById("panel").style.justifyContent = "space-around";
    setTimeout(function(){document.getElementById("panel").style.display = "none";} ,5000);
    
  }