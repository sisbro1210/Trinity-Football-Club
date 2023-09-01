const button = document.getElementById("button")
const body = document.body.classList
var theme = document.documentElement.style
var current = localStorage.getItem("current")

    
button.addEventListener("click", onClick)
function onClick()
{
   
    if (current == "dark"){
    
    theme.setProperty("--text-colourA", "#000000")
    theme.setProperty("--text-colourB", " #ffffff")
    theme.setProperty("--background-light", "#010142")
    theme.setProperty("--background-colour", "#ffffff")
    theme.setProperty("--background-dark", "#010142")
    localStorage.setItem("current", "light")
    current = "light"
    
    
   }else if (current == "light"){
    theme.setProperty("--text-colourA", "#ffffff")
    theme.setProperty("--text-colourB", " #a4edff")
    theme.setProperty("--background-light", "#140a27")
    theme.setProperty("--background-colour", "#110723")
    theme.setProperty("--background-dark", "#0e061c")
    localStorage.setItem("current", "dark")
    current = "dark"

   }

   

   
   
   
   
}

function onload() {


    if(current == "light") {
        localStorage.setItem("current", "light")
    
    }else if (current == "dark") {
        localStorage.setItem("current", "dark")
    
    }else if (current === null) {
        localStorage.setItem("current", "light")
    
    }

    if (current == "dark"){

        theme.setProperty("--text-colourA", "#ffffff")
        theme.setProperty("--text-colourB", " #a4edff")
        theme.setProperty("--background-light", "#140a27")
        theme.setProperty("--background-colour", "#110723")
        theme.setProperty("--background-dark", "#0e061c")
        
        

        }else if (current == "light") {
          
            theme.setProperty("--text-colourA", "#000000")
            theme.setProperty("--text-colourB", " #ffffff")
            theme.setProperty("--background-light", "#010142")
            theme.setProperty("--background-colour", "#ffffff")
            theme.setProperty("--background-dark", "#010142")
        
        }else{

        }

    }

