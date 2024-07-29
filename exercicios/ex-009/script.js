let quantidadeDeClicks = 0
function clicou() {
    quantidadeDeClicks ++
    if (quantidadeDeClicks <= 70) {
        console.log(`Você clicou no botão ${quantidadeDeClicks} vezes`)
    }
    else {
        console.log(`Você clicou no botão ${quantidadeDeClicks} vezes, tá na hora de parar já`)
    }
}

document.querySelector('#button').addEventListener('click', clicou)
