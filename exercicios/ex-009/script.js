const inputText = document.querySelector('#itexto')
function clicou() {
    if(inputText.classList.contains("azul")) {
        inputText.classList.replace("azul", "vermelho")
    }
    else {
        inputText.classList.replace("vermelho", "azul")
    }
    console.log(inputText.classList)
}
document.querySelector("#button").addEventListener('click', clicou)


