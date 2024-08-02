const inputText = document.querySelector('#itexto')
function clicou() {
    console.log(inputText.getAttribute("placeholder"))
    if(inputText.getAttribute("style") === "background-color: blue") {
        inputText.setAttribute("style", "background-color: red")
    }
    else {
        inputText.setAttribute("style", "background-color: blue")
    }
}
document.querySelector("#button").addEventListener('click', clicou)


