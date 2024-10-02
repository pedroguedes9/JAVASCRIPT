document.querySelector("#começar").addEventListener("click", rodar)
document.querySelector("#parar").addEventListener("click", parar)
let timer 
function rodar () {
    timer = setTimeout( function() {
        document.querySelector(".demo").innerHTML = "rodou"
    },
    2000
)}

function parar () {
    clearTimeout(timer)
}

