let fruits = ["maçã", "banana", "uva", "laranja",]
if(fruits.includes("uva")) {
    console.log("A fruta uva está na lista.")
}
else {
    console.log("A fruta uva não está na lista.")
}

let fruitsM = fruits.map(function (fruit){
    return fruit.toUpperCase()
})
console.log(fruitsM)

let numbers = [1, 2, 3, 4, 5]
let sumNumbers = numbers.reduce(function (valorAcumulado, valorAtual) {
    return valorAcumulado + valorAtual
} )
console.log(sumNumbers)

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   
let firstNumberGreaterThanFive = numList.find(function (number) {
    return number > 5
})
console.log(firstNumberGreaterThanFive)