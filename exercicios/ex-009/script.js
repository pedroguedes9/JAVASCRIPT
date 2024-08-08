const input = document.querySelector('input');
const ul = document.querySelector('ul')
function verificarSeTeclaEnter(event) {
    if (event.key === "Enter"){
        const newLi = document.createElement("li")
        newLi.textContent = input.value
        ul.appendChild(newLi)
        input.value = ""
    }
}
input.addEventListener('keyup', verificarSeTeclaEnter)
