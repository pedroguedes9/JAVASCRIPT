let pessoa = {
    nome: "pedro",
    idade: 16,
    sobrenome: "guedes",
    nomeCompleto: function() {
        return this.nome + this.sobrenome
    }
}
console.log(pessoa.nomeCompleto())
