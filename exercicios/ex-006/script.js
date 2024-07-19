
function calcularImovel(metragem, quartos) {
    let m2 = 3000
    let preco = 0
    switch (quartos) {
        case 1: 
        default:
            preco = m2 * metragem
            break
        case 2: 
            preco = (m2 * 1.2) * metragem
            break
        case 3: 
            preco = (m2 * 1.5) * metragem
            break
    }

    return `O preço é ${preco}`
}

console.log(calcularImovel(10, 4))










