let lista = [
    {id:1, nome:"pedro"},
    {id:2, nome:"chaves"},
    {id:3, nome:"guedes"}
]
let lista2 = []
lista2 = lista.find(function(item) {
    return item.nome == "pedro"
})
console.log(lista2)

