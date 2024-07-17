let isMember = true
let shipping = isMember ? 2 : 10
console.log(shipping)
console.log(isMember ? "você é membro" : "você não é membro" )


let age = 90
let isAdult = age >=18 ? "vc é adulto" : "vc nao é adulto"
console.log(isAdult)


let op = "*"
let n1 = 20
let n2 = 20
let resultado
switch(op) {
    case "*":
        resultado = n1 * n2 
        console.log(`O resultado é ${resultado}`)
        break
    case "/":
        resultado = n1 / n2
        console.log(`O resultado é ${resultado}`)
        break
    case "+":
        resultado = n1 + n2
        console.log(`O resultado é ${resultado}`)
        break
    case "-":
        resultado = n1 - n2
        console.log(`O resultado é ${resultado}`)
        break
    default:
        console.log("operação inválida")
        break
}
