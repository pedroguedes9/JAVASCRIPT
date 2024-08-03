const inputText = document.querySelector('#itexto')
function clicou() {
    if (inputText.getAttribute("style") === "background-color: blue;") {
        inputText.style.backgroundColor = "red"
    }
    else {
        inputText.style.backgroundColor = "blue"
    }
}
document.querySelector("#button").addEventListener('click', clicou)
console.log(inputText.getAttribute("style"))

