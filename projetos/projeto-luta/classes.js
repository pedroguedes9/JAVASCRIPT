class Character {
    #life = 1
    maxLife = 1
    attack = 0
    defense = 0
    constructor(name) {
        this.name = name
    }
    get life() {
        return this.#life
    }
    set life(newLife) {
        this.#life = newLife < 0 ? 0 : newLife
    }
}

class LittleMonster extends Character{
    constructor() {
        super("Little Monster")
        this.life = 40
        this.attack = 4
        this.defense = 3
        this.maxLife = this.life
    }
}

class BigMonster extends Character {
    constructor() {
        super("Big Monster")
        this.life = 120
        this.attack = 16
        this.defense = 5
        this.maxLife = this.life
    }
}

class Knight extends Character {
    constructor(name) {
        super(`${name} (Knight)`)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(`${name} (Sorcerer)`) 
        this.life = 80
        this.attack = 17
        this.defense = 4
        this.maxLife = this.life
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
        this.logObject = logObject
    }
    start() {
        this.update()
        this.fighter1El.querySelector("#player-attack").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2) )
        this.fighter2El.querySelector("#monster-attack").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1))
    }
    update() {
        // fighter 1
        this.fighter1El.querySelector("#player-name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector("#player-life-bar").style.width = `${f1Pct}%`
    
        // fighter 2
        this.fighter2El.querySelector("#monster-name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)}`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector("#monster-life-bar").style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.logObject.addMessage("Já está morto")
            return
        }
        let attackFactor = (Math.random() * 2).toFixed(1)
        let defenseFactor = (Math.random() * 2).toFixed(1)
        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor
        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack
            this.logObject.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
            
        }
        else {
            this.logObject.addMessage(`${attacked.name} conseguiu defender`)
        }

        this.update()
    }

}

class Log {
    list = []

    constructor(listEL) {
        this.listEL = listEL
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }
    render() {
        this.listEL.innerHTML = ""

        for(let i in this.list) {
            this.listEL.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}


