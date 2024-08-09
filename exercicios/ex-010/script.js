class Person {
    // variáveis comuns
    age = 0
    //construtor
    constructor(name) {
        this.name = name
    }
    //ações
}

function createPerson(name, age) {
    let p = new Person(name)
    p.age = age
    return p
}
let p1 = createPerson("Pedro", 16)
console.log(p1)
