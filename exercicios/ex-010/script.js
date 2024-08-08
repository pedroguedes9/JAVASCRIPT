class Person {
    // variáveis comuns
    #age = 0
    steps = 0
    //construtor
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    //ações
    takeAStep(){
        this.steps++
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    get age() {
        return this.#age
    }
    set age(x) {
        if(typeof x == "number") {
            this.#age = x
        }
    }
}
let p1 = new Person("Pedro", "Guedes")
let p2 = new Person("Luiz", "Pernambuco")
p1.takeAStep()
p1.age = 30
console.log(`Idade é ${p1.age}`)
