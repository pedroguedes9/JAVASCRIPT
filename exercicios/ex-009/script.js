let quantidadeDeClicks = 0
function clicou() {
    quantidadeDeClicks++
    const quantidadeDeClicksDisplay = document.querySelector("#quantidadeDeClicks")
    const ul = document.querySelector('ul')
    quantidadeDeClicksDisplay.innerHTML = `Você clicou ${quantidadeDeClicks} vezes`
    const newLi = document.createElement('li')
    newLi.innerHTML = "item adicionado"
    ul.appendChild(newLi)
}

document.querySelector('#button').addEventListener('click', clicou)
